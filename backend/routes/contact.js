const express = require('express');
const router = express.Router();
const { sendContactEmail } = require('../services/emailService');

router.post('/', async (req, res) => {
  const { name, company, email, phone, service, details } = req.body;

  if (!name || !email || !service) {
    return res.status(400).json({ error: 'Name, email, and service are required.' });
  }

  try {
    await sendContactEmail({ name, company, email, phone, service, details });
    res.json({ success: true, message: 'Enquiry sent successfully.' });
  } catch (err) {
    console.error('Contact email error:', err.message);
    res.status(500).json({ error: 'Failed to send enquiry. Please try again or call 0331-2134341.' });
  }
});

module.exports = router;
