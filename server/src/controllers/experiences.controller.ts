import { Request, Response, NextFunction } from 'express';
import { PrismaClient } from '@prisma/client';
import { z } from 'zod';

const prisma = new PrismaClient();

const experienceSchema = z.object({
  title: z.string().min(1),
  company: z.string().min(1),
  location: z.string().optional(),
  startDate: z.string().transform((s) => new Date(s)),
  endDate: z.string().optional().nullable().transform((s) => (s ? new Date(s) : null)),
  current: z.boolean().optional(),
  description: z.string().min(1),
  order: z.number().int().optional(),
});

export const getExperiences = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const experiences = await prisma.experience.findMany({ orderBy: { order: 'asc' } });
    res.json({ success: true, data: experiences });
  } catch (err) { next(err); }
};

export const createExperience = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const data = experienceSchema.parse(req.body);
    const experience = await prisma.experience.create({ data });
    res.status(201).json({ success: true, data: experience });
  } catch (err) { next(err); }
};

export const updateExperience = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const id = parseInt(req.params.id);
    const data = experienceSchema.partial().parse(req.body);
    const experience = await prisma.experience.update({ where: { id }, data });
    res.json({ success: true, data: experience });
  } catch (err) { next(err); }
};

export const deleteExperience = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const id = parseInt(req.params.id);
    await prisma.experience.delete({ where: { id } });
    res.json({ success: true, message: 'Expérience supprimée.' });
  } catch (err) { next(err); }
};
