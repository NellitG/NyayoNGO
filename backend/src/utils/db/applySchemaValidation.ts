import * as mongodb from 'mongodb';
import { adminSchema } from '../../models/admin.model.js';
import { donationSchema } from '../../models/donation.model.js';
import { eventSchema } from '../../models/event.model.js';
import { feedbackSchema } from '../../models/feedback.model.js';
import { gallerySchema } from '../../models/gallery.model.js';
import { subscriberSchema } from '../../models/subscriber.model.js';
import { volunteerSchema } from '../../models/volunteer.model.js';

export async function applySchemaValidation(db: mongodb.Db) {
  await db
    .command({ collMod: 'admins', validator: adminSchema })
    .catch(async (error: mongodb.MongoServerError) => {
      if (error.codeName === 'NamespaceNotFound') {
        await db.createCollection('admins', { validator: adminSchema });
      }
    });

  await db
    .command({ collMod: 'donations', validator: donationSchema })
    .catch(async (error: mongodb.MongoServerError) => {
      if (error.codeName === 'NamespaceNotFound') {
        await db.createCollection('donations', { validator: donationSchema });
      }
    });

  await db
    .command({ collMod: 'events', validator: eventSchema })
    .catch(async (error: mongodb.MongoServerError) => {
      if (error.codeName === 'NamespaceNotFound') {
        await db.createCollection('events', {
          validator: eventSchema,
        });
      }
    });

  await db
    .command({ collMod: 'feedbacks', validator: feedbackSchema })
    .catch(async (error: mongodb.MongoServerError) => {
      if (error.codeName === 'NamespaceNotFound') {
        await db.createCollection('feedbacks', { validator: feedbackSchema });
      }
    });

  await db
    .command({ collMod: 'galleries', validator: gallerySchema })
    .catch(async (error: mongodb.MongoServerError) => {
      if (error.codeName === 'NamespaceNotFound') {
        await db.createCollection('galleries', { validator: gallerySchema });
      }
    });

    await db
    .command({ collMod: 'subscribers', validator: subscriberSchema })
    .catch(async (error: mongodb.MongoServerError) => {
      if (error.codeName === 'NamespaceNotFound') {
        await db.createCollection('subscribers', { validator: subscriberSchema });
      }
    });

    await db
    .command({ collMod: 'volunteers', validator: volunteerSchema })
    .catch(async (error: mongodb.MongoServerError) => {
      if (error.codeName === 'NamespaceNotFound') {
        await db.createCollection('volunteers', { validator: volunteerSchema });
      }
    });
}
