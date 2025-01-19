import { Request, Response, NextFunction } from 'express';
import { addTimeStamps } from '../utils/db/addTimeStamps.js';
import { fetchAllVolunteers, registerNewVolunteer } from '../services/volunteer.service.js';
import { ExpressError } from '../utils/ExpressError.js';

export const registerVolunteer = async (req: Request, res: Response) => {
  const volunteer = req.body.volunteer;

  const newVolunteer = addTimeStamps(volunteer);

  const result = await registerNewVolunteer(newVolunteer);

  if (result?.acknowledged) {
    res.status(201).json({ message: 'Successfully registered the volunteer' });
  } else {
    throw new ExpressError('Could not register the volunteer', 500);
  }
};

export const showAllVolunteers = async (req: Request, res: Response) => {
  const volunteers = await fetchAllVolunteers();
  res.status(200).json(volunteers);
}
