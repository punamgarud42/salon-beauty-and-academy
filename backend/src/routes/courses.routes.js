import { Router } from 'express';
import { getAllCourses, createCourse, updateCourse, deleteCourse } from '../controllers/courses.controller.js';

const router = Router();

router.get('/', getAllCourses);
router.post('/', createCourse);       // TODO Phase 8: protect with admin auth middleware
router.put('/:id', updateCourse);     // TODO Phase 8: protect with admin auth middleware
router.delete('/:id', deleteCourse);  // TODO Phase 8: protect with admin auth middleware

export default router;
