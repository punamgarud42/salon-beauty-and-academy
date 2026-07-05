import { Router } from 'express';
import { subscribe, listSubscribers } from '../controllers/newsletter.controller.js';

const router = Router();

router.post('/subscribe', subscribe);
router.get('/subscribers', listSubscribers); // TODO Phase 8: protect with admin auth middleware

export default router;
