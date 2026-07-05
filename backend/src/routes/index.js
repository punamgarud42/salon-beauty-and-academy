import { Router } from 'express';
import healthRoutes from './health.routes.js';
import businessInfoRoutes from './businessInfo.routes.js';
import newsletterRoutes from './newsletter.routes.js';
import servicesRoutes from './services.routes.js';
import bookingsRoutes from './bookings.routes.js';
import coursesRoutes from './courses.routes.js';
import batchesRoutes from './batches.routes.js';
import enrollmentsRoutes from './enrollments.routes.js';
import contactRoutes from './contact.routes.js';

const router = Router();

router.use('/health', healthRoutes);
router.use('/business-info', businessInfoRoutes);
router.use('/newsletter', newsletterRoutes);   // added in Phase 2
router.use('/services', servicesRoutes);       // added in Phase 3
router.use('/bookings', bookingsRoutes);       // added in Phase 3
router.use('/courses', coursesRoutes);         // added in Phase 4
router.use('/batches', batchesRoutes);         // added in Phase 4
router.use('/enrollments', enrollmentsRoutes); // added in Phase 4
router.use('/contact', contactRoutes);         // added in Phase 7

/*
  Later phases mount here too, keeping this file the single index of the API:
    router.use('/auth', authRoutes);         // Phase 8
    router.use('/payments', paymentsRoutes); // Phase 9
*/

export default router;
