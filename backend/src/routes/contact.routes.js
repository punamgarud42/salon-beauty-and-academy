import { Router } from 'express';
import { createContactMessage, listContactMessages } from '../controllers/contact.controller.js';

const router = Router();

router.post('/', createContactMessage);
router.get('/', listContactMessages); // TODO Phase 8: protect with admin auth middleware

export default router;
