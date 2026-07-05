import ContactMessage from '../models/ContactMessage.model.js';

export async function createContactMessage(req, res) {
  const { name, phone, email, subject, message } = req.body;

  if (!name || !message) {
    return res.status(400).json({ error: 'Name and message are required.' });
  }
  if (!phone && !email) {
    return res.status(400).json({ error: 'A phone number or email is required so we can reply.' });
  }

  try {
    const contactMessage = await ContactMessage.create({ name, phone, email, subject, message });
    res.status(201).json(contactMessage);
  } catch (err) {
    console.error('[contact] createContactMessage failed:', err);
    res.status(500).json({ error: 'Could not send message. Please try again.' });
  }
}

/**
 * GET /api/contact
 * Owner-only in Phase 8 (auth middleware to be added then). Lists all
 * contact form submissions for the admin dashboard.
 */
export async function listContactMessages(req, res) {
  try {
    const messages = await ContactMessage.find().sort({ createdAt: -1 });
    res.json(messages);
  } catch (err) {
    console.error('[contact] listContactMessages failed:', err);
    res.status(500).json({ error: 'Could not load messages.' });
  }
}
