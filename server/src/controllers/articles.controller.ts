import { Request, Response, NextFunction } from 'express';
import { PrismaClient } from '@prisma/client';
import { z } from 'zod';

const prisma = new PrismaClient();

const articleSchema = z.object({
  title: z.string().min(1),
  slug: z.string().min(1),
  excerpt: z.string().min(1),
  content: z.string().min(1),
  coverImage: z.string().optional(),
  published: z.boolean().optional(),
  publishedAt: z.string().optional().nullable().transform((s) => (s ? new Date(s) : null)),
  readTime: z.number().int().optional(),
  tags: z.string().optional(), // JSON string
});

// Routes publiques
export const getPublishedArticles = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const articles = await prisma.article.findMany({
      where: { published: true },
      orderBy: { publishedAt: 'desc' },
      select: { id: true, title: true, slug: true, excerpt: true, coverImage: true, publishedAt: true, readTime: true, tags: true },
    });
    res.json({ success: true, data: articles });
  } catch (err) { next(err); }
};

export const getArticleBySlug = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { slug } = req.params;
    const article = await prisma.article.findFirst({ where: { slug, published: true } });
    if (!article) {
      res.status(404).json({ success: false, message: 'Article non trouvé.' });
      return;
    }
    res.json({ success: true, data: article });
  } catch (err) { next(err); }
};

// Routes Admin (protégées)
export const getAllArticles = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const articles = await prisma.article.findMany({ orderBy: { createdAt: 'desc' } });
    res.json({ success: true, data: articles });
  } catch (err) { next(err); }
};

export const createArticle = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const data = articleSchema.parse(req.body);
    const article = await prisma.article.create({ data });
    res.status(201).json({ success: true, data: article });
  } catch (err) { next(err); }
};

export const updateArticle = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const id = parseInt(req.params.id);
    const data = articleSchema.partial().parse(req.body);
    // Auto-set publishedAt when publishing for the first time
    if (data.published && !data.publishedAt) {
      data.publishedAt = new Date();
    }
    const article = await prisma.article.update({ where: { id }, data });
    res.json({ success: true, data: article });
  } catch (err) { next(err); }
};

export const deleteArticle = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const id = parseInt(req.params.id);
    await prisma.article.delete({ where: { id } });
    res.json({ success: true, message: 'Article supprimé.' });
  } catch (err) { next(err); }
};
