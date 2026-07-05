import { Router } from 'express';
import { getAllServices, createService, updateService, deleteService } from '../controllers/services.controller.js';

const router = Router();

router.get('/', getAllServices);
router.post('/', createService);       // TODO Phase 8: protect with admin auth middleware
router.put('/:id', updateService);     // TODO Phase 8: protect with admin auth middleware
router.delete('/:id', deleteService);  // TODO Phase 8: protect with admin auth middleware

export default router;
