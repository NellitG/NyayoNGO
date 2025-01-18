import { Request, Response, NextFunction } from 'express';
import { createNewFeedback } from '../services/feedback.service.js';
import { ExpressError } from '../utils/ExpressError.js';
import { addTimeStamps } from '../utils/db/addTimeStamps.js';

export const createFeedback = async (req: Request, res: Response) => {
  const feedback = req.body.feedback;

  const newFeedback = addTimeStamps(feedback); // Add createdAt and updatedAt fields to the feedback

  const result = await createNewFeedback(newFeedback);

  if (result?.acknowledged) {
    res.status(201).json({ message: 'Successfully submitted the feedback' });
  } else {
    throw new ExpressError('Could not create the feedback', 500);
  }
};
