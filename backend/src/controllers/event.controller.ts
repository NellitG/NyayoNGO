import { Request, Response } from 'express';
import * as mongodb from 'mongodb';

import { createNewEvent, deleteOneEvent, fetchAllEvents, findEvent, isValidId } from '../services/event.service.js';
import { ExpressError } from '../utils/ExpressError.js';
import { cloudinary } from '../utils/upload/cloudinary.js';
import { addTimeStamps } from '../utils/db/addTimeStamps.js';


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
};

export const createEvent = async (req: Request, res: Response) => {
  const event = req.body.event;
  event.images = [];

  // upload images to cloudinary
  for ( const file of req.files as Express.Multer.File[]) {
    const result = await cloudinary.uploader.upload(file.path, {asset_folder: 'Nyayo'});
    const imageObject = {
      url: result.secure_url,
      public_id: result.public_id
    };
    event.images.push(imageObject);
  }

  const newEvent = addTimeStamps(event);

  const result = await createNewEvent(newEvent);

  if (result?.acknowledged) {
    res.status(201).json({ message: 'Successfully created an event' });
  } else {
    throw new ExpressError('Could not create the event', 500);
  }
}