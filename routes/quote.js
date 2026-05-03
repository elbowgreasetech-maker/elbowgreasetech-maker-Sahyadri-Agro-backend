const express = require('express');
const { body, validationResult } = require('express-validator');
const { sendMail } = require('../utils/mailer');
const products = require('../data/products');

const router = express.Router();

const validProductIds = products.map((p) => p.id);

// POST /api/quote — structured RFQ from the "Get Quote" CTA
router.post(
  '/',
  [
    body('name').trim().isLength({ min: 2, max: 80 }),
    body('company').optional({ checkFalsy: true }).trim().isLength({ max: 100 }),
    body('email').trim().isEmail(),
    body('phone').optional({ checkFalsy: true }).trim().isLength({ max: 30 }),
    body('country').trim().isLength({ min: 2, max: 60 }),
    body('productId').isIn(validProductIds).withMessage('Please choose a valid product.'),
    body('quantity').trim().isLength({ min: 1, max: 60 }).withMessage('Please specify a quantity (e.g. "25 MT").'),
    body('incoterm').optional({ checkFalsy: true }).isIn(['FOB', 'CIF', 'CFR', 'EXW', 'DAP']),
    body('notes').optional({ checkFalsy: true }).trim().isLength({ max: 2000 }),
    body('website').optional().isLength({ max: 0 }), // honeypot
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ ok: false, errors: errors.array() });
    }

    const { name, company, email, phone, country, productId, quantity, incoterm, notes } = req.body;
    const product = products.find((p) => p.id === productId);

    const subject = `RFQ: ${product.name} — ${quantity} → ${country}`;
    const text = [
      '=== Quote Request ===',
      `Product:   ${product.name} (${productId})`,
      `Quantity:  ${quantity}`,
      `Incoterm:  ${incoterm || '—'}`,
      `Country:   ${country}`,
      '',
      '=== Contact ===',
      `Name:      ${name}`,
      `Company:   ${company || '—'}`,
      `Email:     ${email}`,
      `Phone:     ${phone || '—'}`,
      '',
      '=== Notes ===',
      notes || '—',
    ].join('\n');

    try {
      const result = await sendMail({ subject, text, replyTo: email });
      res.json({
        ok: true,
        message: `Thanks ${name.split(' ')[0]} — your RFQ for ${product.name} has been received. We'll send a detailed quote within 24 hours.`,
        delivery: result,
      });
    } catch (err) {
      console.error('Quote mail error:', err);
      res.status(500).json({ ok: false, error: 'Could not submit your quote. Please try again.' });
    }
  }
);

module.exports = router;
