import { Request, Response } from 'express';
import prisma from '../config/prisma';

// @desc    Get all projects
// @route   GET /api/projects
// @access  Public
export const getProjects = async (req: Request, res: Response) => {
  try {
    const projects = await prisma.project.findMany({
      include: {
        technologies: true
      },
      orderBy: {
        createdAt: 'desc'
      }
    });
    res.json({ success: true, data: projects });
  } catch (error: any) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// @desc    Get single project
// @route   GET /api/projects/:id
// @access  Public
export const getProjectById = async (req: Request, res: Response) => {
  try {
    const project = await prisma.project.findUnique({
      where: { id: Number(req.params.id) },
      include: {
        technologies: true
      }
    });

    if (!project) {
      return res.status(404).json({ success: false, message: 'Projet introuvable' });
    }

    res.json({ success: true, data: project });
  } catch (error: any) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// @desc    Create project
// @route   POST /api/projects
// @access  Private (Admin)
export const createProject = async (req: Request, res: Response) => {
  try {
    const { title, slug, description, longDescription, image, githubUrl, liveUrl, featured, technologies } = req.body;

    const project = await prisma.project.create({
      data: {
        title,
        slug,
        description,
        longDescription,
        image,
        githubUrl,
        liveUrl,
        featured,
        technologies: {
          create: technologies?.map((name: string) => ({ name })) || []
        }
      },
      include: {
        technologies: true
      }
    });

    res.status(201).json({ success: true, data: project });
  } catch (error: any) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// @desc    Update project
// @route   PUT /api/projects/:id
// @access  Private (Admin)
export const updateProject = async (req: Request, res: Response) => {
  try {
    const { title, slug, description, longDescription, image, githubUrl, liveUrl, featured, technologies } = req.body;

    // Delete existing technologies if providing new ones
    if (technologies) {
      await prisma.projectTechnology.deleteMany({
        where: { projectId: Number(req.params.id) }
      });
    }

    const project = await prisma.project.update({
      where: { id: Number(req.params.id) },
      data: {
        title,
        slug,
        description,
        longDescription,
        image,
        githubUrl,
        liveUrl,
        featured,
        ...(technologies && {
          technologies: {
            create: technologies.map((name: string) => ({ name }))
          }
        })
      },
      include: {
        technologies: true
      }
    });

    res.json({ success: true, data: project });
  } catch (error: any) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// @desc    Delete project
// @route   DELETE /api/projects/:id
// @access  Private (Admin)
export const deleteProject = async (req: Request, res: Response) => {
  try {
    await prisma.project.delete({
      where: { id: Number(req.params.id) }
    });
    res.json({ success: true, message: 'Projet supprimé' });
  } catch (error: any) {
    res.status(500).json({ success: false, message: error.message });
  }
};
