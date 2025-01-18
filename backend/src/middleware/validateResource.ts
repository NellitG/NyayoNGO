// Validate a request against a zod schema
import { AnyZodObject } from 'zod';
import { Request, Response, NextFunction } from 'express';
import { ExpressError } from '../utils/ExpressError.js';

export const validate = (schema: AnyZodObject) => (req: Request, res: Response, next: NextFunction) => {
  try {
    schema.parse(req.body);
    next();
  } catch(e: any) {
    const error = new ExpressError(e.errors[0].message, 400, e.errors); // 400(bad request)
    next(error);
  }
};