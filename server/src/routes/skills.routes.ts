import { Router } from 'express';
import { getSkills, createSkill, updateSkill, deleteSkill } from '../controllers/skills.controller';
import { protect } from '../middlewares/auth.middleware';

const router = Router();

router.get('/', getSkills); // Public
router.post('/', protect, createSkill); // Admin
router.put('/:id', protect, updateSkill); // Admin
router.delete('/:id', protect, deleteSkill); // Admin

export default router;
