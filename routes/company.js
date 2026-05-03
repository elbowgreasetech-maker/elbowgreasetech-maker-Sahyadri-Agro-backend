const express = require('express');
const company = require('../data/company');

const router = express.Router();

// GET /api/company — full company metadata
router.get('/', (_req, res) => {
  res.json({ ok: true, company });
});

module.exports = router;
