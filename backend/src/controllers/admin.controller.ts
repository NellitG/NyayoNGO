import express, { Request, Response, NextFunction } from 'express';
import passport from 'passport';
import bcrypt from 'bcrypt';
import { collections } from '../utils/db/connectToDb.js';
import { addTimeStamps } from '../utils/db/addTimeStamps.js';

export const login = (req: Request, res: Response, next: NextFunction) => {
  passport.authenticate('local', (err: Error | null, user: Express.User | false, info: {message?: string} | undefined) => {
    if (err) {
      next(err); // Handle unexpected errors
      return;
    }
    if (!user) {
      res.status(401).json({ message: info?.message || 'Authentication failed' });
      return;
    }
    req.login(user, (err) => {
      if (err) {
        return next(err);
      }
      res.status(200).json({ message: 'Login was successful' }); // can also add user, but I am no
    });
  })(req, res, next);
};

export const logout = (req: Request, res: Response, next: NextFunction) => {
  req.logout((err) => {
    if (err) {
      return next(err); // Handle logout errors if needed
    }
    res.status(200).json({ message: 'Logout successful' });
  });
};

// Delete this before pushing the application to production
export const register = async (req: Request, res: Response, next: NextFunction) => {
  try {
  const user = req.body;
  const hash = await bcrypt.hash(req.body.password, 12);
  user.password = hash;

  const newAdmin = addTimeStamps(user)

  const result = await collections.admins?.insertOne(newAdmin);

  if(!result?.acknowledged) throw new Error('Failed to create a new user');
  
  res.status(200).json({message: 'Successfully created an admin user'});
} catch (e: any) {
    res.status(500).json({message: 'Error occured. Admin not created'})
  }
}

