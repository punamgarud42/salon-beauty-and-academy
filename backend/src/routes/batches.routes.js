import { Router } from 'express';
import { getAllBatches, createBatch, updateBatch } from '../controllers/batches.controller.js';

const router = Router();

router.get('/', getAllBatches);
router.post('/', createBatch);      // TODO Phase 8: protect with admin auth middleware
router.put('/:id', updateBatch);    // TODO Phase 8: protect with admin auth middleware

export default router;
