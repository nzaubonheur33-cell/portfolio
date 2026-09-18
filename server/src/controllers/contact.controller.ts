import { Request, Response } from 'express';
import prisma from '../config/prisma';
import { z } from 'zod';
import { Resend } from 'resend';

const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null;

const contactSchema = z.object({
  name: z.string().min(2, 'Le nom doit faire au moins 2 caractères'),
  email: z.string().email('Email invalide'),
  subject: z.string().min(3, 'Le sujet doit faire au moins 3 caractères'),
  projectType: z.string(),
  message: z.string().min(10, 'Le message doit faire au moins 10 caractères')
});

// @desc    Submit a contact message
// @route   POST /api/contact
// @access  Public
export const submitContact = async (req: Request, res: Response) => {
  try {
    const validatedData = contactSchema.parse(req.body);

    const message = await prisma.contactMessage.create({
      data: validatedData
    });

    // Envoyer l'email via Resend
    if (resend) {
      await resend.emails.send({
        from: 'Portfolio <onboarding@resend.dev>', // Changer avec le domaine vérifié en prod
        to: ['nzaubonheur84@gmail.com'],
        replyTo: validatedData.email,
        subject: `Nouveau message: ${validatedData.subject}`,
        html: `
          <h3>Nouveau message de contact</h3>
          <p><strong>Nom:</strong> ${validatedData.name}</p>
          <p><strong>Email:</strong> ${validatedData.email}</p>
          <p><strong>Type de projet:</strong> ${validatedData.projectType}</p>
          <p><strong>Message:</strong></p>
          <p>${validatedData.message}</p>
        `
      });
    }

    res.status(201).json({ success: true, message: 'Message envoyé avec succès' });
  } catch (error: any) {
    if (error instanceof z.ZodError) {
      return res.status(400).json({ success: false, message: error.issues[0].message });
    }
    res.status(500).json({ success: false, message: error.message });
  }
};

// @desc    Get all contact messages
// @route   GET /api/contact
// @access  Private (Admin)
export const getMessages = async (req: Request, res: Response) => {
  try {
    const messages = await prisma.contactMessage.findMany({
      orderBy: { createdAt: 'desc' }
    });
    res.json({ success: true, data: messages });
  } catch (error: any) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// @desc    Update message status
// @route   PUT /api/contact/:id
// @access  Private (Admin)
export const updateMessageStatus = async (req: Request, res: Response) => {
  try {
    const { status } = req.body;
    const message = await prisma.contactMessage.update({
      where: { id: Number(req.params.id) },
      data: { status }
    });
    res.json({ success: true, data: message });
  } catch (error: any) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// @desc    Delete message
// @route   DELETE /api/contact/:id
// @access  Private (Admin)
export const deleteMessage = async (req: Request, res: Response) => {
  try {
    await prisma.contactMessage.delete({
      where: { id: Number(req.params.id) }
    });
    res.json({ success: true, message: 'Message supprimé' });
  } catch (error: any) {
    res.status(500).json({ success: false, message: error.message });
  }
};
