import { Router } from 'express';
import { createEnrollment, listEnrollments } from '../controllers/enrollments.controller.js';

const router = Router();

router.post('/', createEnrollment);
router.get('/', listEnrollments); // TODO Phase 8: protect with admin auth middleware

export default router;
