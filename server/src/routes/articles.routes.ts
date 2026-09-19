import { Router } from 'express';
import { getPublishedArticles, getArticleBySlug, getAllArticles, createArticle, updateArticle, deleteArticle } from '../controllers/articles.controller';
import { protect } from '../middlewares/auth.middleware';

const router = Router();

// Routes publiques
router.get('/', getPublishedArticles);
router.get('/:slug', getArticleBySlug);

// Routes admin
router.get('/admin/all', protect, getAllArticles);
router.post('/', protect, createArticle);
router.put('/:id', protect, updateArticle);
router.delete('/:id', protect, deleteArticle);

export default router;
