import { Request, Response } from 'express';
import * as mongodb from 'mongodb';

import { deleteOneEvent, fetchAllEvents, findEvent, isValidId } from '../services/event.service.js';
import { ExpressError } from '../utils/ExpressError.js';


export const showAllEvents = async (req: Request, res: Response) => {
  const events = await fetchAllEvents();
  res.status(200).json(events);
};

export const showOneEvent = async (req: Request, res: Response) => {
  const id = req.params.id;
  isValidId(id); // check if id is valid mongodb id

  const query = { _id: new mongodb.ObjectId(id) };
  const event = await findEvent(query);
  
  if (event) {
    res.status(200).json(event);
  } else {
    throw new ExpressError('The event does not exist', 404)
  }
};

export const editEventForm = async (req: Request, res: Response) => {
  const id = req.params.id;
  const query = {_id: new mongodb.ObjectId(id)};

  const event = await findEvent(query);
  if (!event) {
    throw new ExpressError('The event does not exist', 404);
  }
  res.status(200).json(event);
};

export const deleteEvent = async (req: Request, res: Response) => {
  const id = req.params.id;
  const query = {_id: new mongodb.ObjectId(id)};

  const result = await deleteOneEvent(query);
  if (result?.acknowledged && result.deletedCount > 0) {
    res.status(200).json({message: 'Sucessfully deleted the event'});
    return;
  }
  res.status(404).json({ message: 'The event does not exist or was not found' });
}