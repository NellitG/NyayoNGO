import * as mongodb from 'mongodb';

export interface Subscriber {
  _id?: mongodb.ObjectId;
  email: string;
  createdAt?: Date;
  updatedAt: Date;
};

export const subscriberSchema = {
  $jsonSchema: {
    bsonType: 'object',
    required: ['email', 'createdAt', 'updatedAt'],
    properties: {
      _id: {
        bsonType: 'objectId',
        description: 'Unique id for a subscriber in MongoDb',
      },
      email: {
        bsonType: 'string',
        description: 'Email of the subscriber',
      },
      createdAt: {
        bsonType: 'date',
        description: 'Date the email was subscribed',
      },
      updatedAt: {
        bsonType: 'date',
        description: 'Date when the subscriber information was last updated',
      },
    },
  },
};
