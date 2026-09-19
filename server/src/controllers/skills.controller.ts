import { Request, Response, NextFunction } from 'express';
import { PrismaClient } from '@prisma/client';
import { z } from 'zod';

const prisma = new PrismaClient();

const skillSchema = z.object({
  category: z.string().min(1),
  name: z.string().min(1),
  level: z.number().int().min(0).max(100).optional(),
  icon: z.string().optional(),
  order: z.number().int().optional(),
});

export const getSkills = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const skills = await prisma.skill.findMany({ orderBy: [{ category: 'asc' }, { order: 'asc' }] });
    res.json({ success: true, data: skills });
  } catch (err) { next(err); }
};

export const createSkill = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const data = skillSchema.parse(req.body);
    const skill = await prisma.skill.create({ data });
    res.status(201).json({ success: true, data: skill });
  } catch (err) { next(err); }
};

export const updateSkill = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const id = parseInt(req.params.id);
    const data = skillSchema.partial().parse(req.body);
    const skill = await prisma.skill.update({ where: { id }, data });
    res.json({ success: true, data: skill });
  } catch (err) { next(err); }
};

export const deleteSkill = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const id = parseInt(req.params.id);
    await prisma.skill.delete({ where: { id } });
    res.json({ success: true, message: 'Skill supprimé.' });
  } catch (err) { next(err); }
};
