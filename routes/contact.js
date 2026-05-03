const express = require('express');
const { body, validationResult } = require('express-validator');
const { sendMail } = require('../utils/mailer');

const router = express.Router();

// POST /api/contact — general contact form
router.post(
  '/',
  [
    body('name').trim().isLength({ min: 2, max: 80 }).withMessage('Name is required (2–80 chars).'),
    body('email').trim().isEmail().withMessage('A valid email is required.'),
    body('product').optional({ checkFalsy: true }).trim().isLength({ max: 60 }),
    body('message').trim().isLength({ min: 10, max: 2000 }).withMessage('Message must be 10–2000 chars.'),
    // Honeypot: real users leave this blank; bots tend to fill every field.
    body('website').optional().isLength({ max: 0 }).withMessage('Spam detected.'),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ ok: false, errors: errors.array() });
    }

    const { name, email, product, message } = req.body;

    const subject = `New website enquiry from ${name}${product ? ` — ${product}` : ''}`;
    const text = [
      `Name:    ${name}`,
      `Email:   ${email}`,
      `Product: ${product || '—'}`,
      '',
      'Message:',
      message,
    ].join('\n');

    try {
      const result = await sendMail({ subject, text, replyTo: email });
      res.json({
        ok: true,
        message: 'Thank you — our export team will be in touch within one business day.',
        delivery: result,
      });
    } catch (err) {
      console.error('Contact mail error:', err);
      res.status(500).json({ ok: false, error: 'Could not send your message. Please try again or email us directly.' });
    }
  }
);

module.exports = router;
