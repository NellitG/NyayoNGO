import * as mongodb from 'mongodb';

import { collections } from '../utils/db/connectToDb.js';
import { ExpressError } from '../utils/ExpressError.js';
import { Event } from '../models/event.model.js';

// Validate ID
export function isValidId(id: string) {
  if (!mongodb.ObjectId.isValid(id)) {
    throw new ExpressError('Invalid event ID format', 400);
  }
};

export async function fetchAllEvents() {
  const result = await collections.events?.find({}).toArray();
  return result;
};

export async function findEvent(query: {_id: mongodb.ObjectId}) {
  const result = await collections.events?.findOne(query);
  return result;
};

export async function deleteOneEvent(query: {_id: mongodb.ObjectId}) {
  const result = await collections.events?.deleteOne(query);
  return result;
};

export async function createNewEvent(event: Event) {
  const result = await collections.events?.insertOne(event);
  return result;
}