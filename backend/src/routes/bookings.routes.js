import { Router } from 'express';
import { getAvailability, createBooking, listBookings } from '../controllers/bookings.controller.js';

const router = Router();

router.get('/availability', getAvailability);
router.post('/', createBooking);
router.get('/', listBookings); // TODO Phase 8: protect with admin auth middleware

export default router;
