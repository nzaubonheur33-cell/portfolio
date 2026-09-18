import { Request, Response, NextFunction } from 'express';

export const errorHandler = (err: any, req: Request, res: Response, next: NextFunction) => {
  console.error(err.stack);
  const status = err.statusCode || 500;
  const message = err.message || 'Une erreur est survenue sur le serveur.';

  res.status(status).json({
    success: false,
    message: message
  });
};
