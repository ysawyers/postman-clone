import express, { Request, Response, NextFunction } from 'express';

export default function authorizeUser(req: Request, res: Response, next: NextFunction) {
  next();
}
