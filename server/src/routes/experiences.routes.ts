import { Router } from 'express';
import { getExperiences, createExperience, updateExperience, deleteExperience } from '../controllers/experiences.controller';
import { protect } from '../middlewares/auth.middleware';

const router = Router();

router.get('/', getExperiences); // Public
router.post('/', protect, createExperience); // Admin
router.put('/:id', protect, updateExperience); // Admin
router.delete('/:id', protect, deleteExperience); // Admin

export default router;
