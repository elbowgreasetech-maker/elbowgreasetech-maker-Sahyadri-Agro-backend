/**
 * Mailer utility.
 *
 * If SMTP env vars are present, sends real email via nodemailer.
 * Otherwise (typical in local dev) it logs the payload and resolves —
 * so the contact form keeps working end-to-end without setup.
 */

const nodemailer = require('nodemailer');

let transporter = null;

function getTransporter() {
  if (transporter) return transporter;

  const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS } = process.env;
  if (!SMTP_HOST || !SMTP_USER || !SMTP_PASS) return null;

  transporter = nodemailer.createTransport({
    host: SMTP_HOST,
    port: Number(SMTP_PORT) || 587,
    secure: Number(SMTP_PORT) === 465,
    auth: { user: SMTP_USER, pass: SMTP_PASS },
  });

  return transporter;
}

async function sendMail({ subject, text, html, replyTo }) {
  const t = getTransporter();
  const to = process.env.CONTACT_TO || 'info@sahyadriagro.com';
  const from = process.env.SMTP_FROM || 'noreply@sahyadriagro.com';

  if (!t) {
    console.log('\n📭  [DEV mailer] SMTP not configured — would have sent:');
    console.log('   To:      ', to);
    console.log('   From:    ', from);
    console.log('   ReplyTo: ', replyTo || '—');
    console.log('   Subject: ', subject);
    console.log('   Body:\n', text, '\n');
    return { delivered: false, devLogged: true };
  }

  const info = await t.sendMail({ from, to, replyTo, subject, text, html });
  return { delivered: true, messageId: info.messageId };
}

module.exports = { sendMail };
