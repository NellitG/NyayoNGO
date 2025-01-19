import { Request, Response, NextFunction } from 'express';

// Check if a user is logged in
export const isLoggedIn = (req: Request, res: Response, next: NextFunction) => {
  if(!req.isAuthenticated()) {
    res.status(401).json({ message: 'User is not authenticated' });
    return;
  }
  next()
}