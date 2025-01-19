import { Request, Response, NextFunction } from 'express';
import { addTimeStamps } from '../utils/db/addTimeStamps.js';
import { createSubscriber } from '../services/subscriber.service.js';
import { ExpressError } from '../utils/ExpressError.js';

export const registerSubscriber = async (req: Request, res: Response) => {
  const subscriber = req.body.subscriber;

  const newSubscriber = addTimeStamps(subscriber);
  const result = await createSubscriber(newSubscriber);

  if (result?.acknowledged) {
    res.status(201).json({ message: 'Successfully registered the Subscriber' });
  } else {
    throw new ExpressError('Could not register the subscriber', 500);
  }
};
