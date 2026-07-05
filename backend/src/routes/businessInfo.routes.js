import { Router } from 'express';
import { getBusinessInfo, updateBusinessInfo } from '../controllers/businessInfo.controller.js';

const router = Router();

router.get('/', getBusinessInfo);
router.put('/', updateBusinessInfo);

export default router;
