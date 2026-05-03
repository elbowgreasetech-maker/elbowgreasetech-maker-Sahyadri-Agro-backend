/**
 * Sahyadri Agro India Pvt. Ltd. — Backend API
 * Express server exposing endpoints for products, contact form,
 * quote requests, and company metadata.
 */

require('dotenv').config();

const express = require('express');
const cors = require('cors');
const rateLimit = require('express-rate-limit');

const productsRouter = require('./routes/products');
const contactRouter = require('./routes/contact');
const quoteRouter = require('./routes/quote');
const companyRouter = require('./routes/company');

const app = express();
const PORT = process.env.PORT || 5000;
const CORS_ORIGIN = process.env.CORS_ORIGIN || '*';

// ---------- Middleware ----------
app.use(cors({ origin: CORS_ORIGIN }));
app.use(express.json({ limit: '50kb' }));
app.use(express.urlencoded({ extended: true }));

// Basic security: rate-limit form-submission endpoints to discourage spam
const formLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 20,                  // 20 submissions per IP per window
  standardHeaders: true,
  legacyHeaders: false,
  message: { ok: false, error: 'Too many requests. Please try again later.' },
});

// Request logger (lightweight)
app.use((req, _res, next) => {
  const ts = new Date().toISOString();
  console.log(`[${ts}] ${req.method} ${req.originalUrl}`);
  next();
});

// ---------- Health check ----------
app.get('/api/health', (_req, res) => {
  res.json({
    ok: true,
    service: 'sahyadri-agro-api',
    time: new Date().toISOString(),
  });
});

// ---------- Routes ----------
app.use('/api/products', productsRouter);
app.use('/api/company', companyRouter);
app.use('/api/contact', formLimiter, contactRouter);
app.use('/api/quote',   formLimiter, quoteRouter);

// 404
app.use((req, res) => {
  res.status(404).json({ ok: false, error: `Route not found: ${req.method} ${req.originalUrl}` });
});

// Error handler
app.use((err, _req, res, _next) => {
  console.error('Unhandled error:', err);
  res.status(500).json({ ok: false, error: 'Internal server error' });
});

app.listen(PORT, () => {
  console.log(`\n🌾  Sahyadri Agro API running on http://localhost:${PORT}`);
  console.log(`   CORS origin: ${CORS_ORIGIN}`);
  console.log(`   Env:         ${process.env.NODE_ENV || 'development'}\n`);
});
