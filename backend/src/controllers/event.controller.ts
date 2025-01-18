import { Request, Response } from 'express';
import * as mongodb from 'mongodb';

import { fetchAllEvents, findEvent, isValidId } from '../services/event.service.js';
import { ExpressError } from '../utils/ExpressError.js';


export const showAllEvents = async (req: Request, res: Response) => {
  const events = await fetchAllEvents();
  res.json(events);
}

export const showOneEvent = async (req: Request, res: Response) => {
  const id = req.params.id;
  isValidId(id); // check if id is valid mongodb id

  const query = { _id: new mongodb.ObjectId(id) };
  const event = await findEvent(query);
  
  if (event) {
    res.json(event);
  } else {
    throw new ExpressError('The event does not exist', 404)
  }
}