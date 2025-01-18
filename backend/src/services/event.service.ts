import * as mongodb from 'mongodb';

import { collections } from '../utils/db/connectToDb.js';
import { ExpressError } from '../utils/ExpressError.js';

export async function fetchAllEvents() {
  const result = await collections.events?.find({}).toArray();
  return result;
}

export async function findEvent(query: {_id: mongodb.ObjectId}) {
  const result = await collections.events?.findOne(query);
  return result;
}

// Validate ID
export function isValidId(id: string) {
  if (!mongodb.ObjectId.isValid(id)) {
    throw new ExpressError('Invalid event ID format', 400);
  }
}