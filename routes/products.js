const express = require('express');
const products = require('../data/products');

const router = express.Router();

// GET /api/products — list all
router.get('/', (_req, res) => {
  res.json({ ok: true, count: products.length, products });
});

// GET /api/products/:id — single product
router.get('/:id', (req, res) => {
  const product = products.find((p) => p.id === req.params.id);
  if (!product) {
    return res.status(404).json({ ok: false, error: 'Product not found' });
  }
  res.json({ ok: true, product });
});

module.exports = router;
