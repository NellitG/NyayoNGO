import * as mongodb from 'mongodb';

import { Admin } from '../../models/admin.model.js';
import { Donation } from '../../models/donation.model.js';
import { Event } from '../../models/event.model.js';
import { Feedback } from '../../models/feedback.model.js';
import { Gallery } from '../../models/gallery.model.js';
import { Subscriber } from '../../models/subscriber.model.js';
import { Volunteer } from '../../models/volunteer.model.js';
import { applySchemaValidation } from './applySchemaValidation.js';

// Hold references to collections
export const collections: {
  admins?: mongodb.Collection<Admin>;
  donations?: mongodb.Collection<Donation>;
  events?: mongodb.Collection<Event>;
  feedbacks?: mongodb.Collection<Feedback>;
  galleries?: mongodb.Collection<Gallery>;
  subscribers?: mongodb.Collection<Subscriber>;
  volunteers?: mongodb.Collection<Volunteer>;
} = {};

// Connect to the database
export async function connectToDatabase(dbUri: string) {
  const client = new mongodb.MongoClient(dbUri);
  await client.connect();

  const db = client.db('Nyayo'); // create db instance, specify dbName
  await applySchemaValidation(db);
    
  collections.admins = db.collection<Admin>('admins');
  collections.donations = db.collection<Donation>('donations');
  collections.events = db.collection<Event>('events');
  collections.feedbacks = db.collection<Feedback>('feedbacks');
  collections.galleries = db.collection<Gallery>('galleries');
  collections.subscribers = db.collection<Subscriber>('subscribers');
  collections.volunteers = db.collection<Volunteer>('volunteers');

  return client;
}