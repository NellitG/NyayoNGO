import * as mongodb from 'mongodb';

export interface Event {
  _id?: mongodb.ObjectId;
  title: string;
  description: string;
  date: Date;
  location: string;
  images: { url: string; public_id: string }[];
  createdAt?: Date;
  updatedAt: Date;
};

export const eventSchema = {
  $jsonSchema: {
    bsonType: 'object',
    required: [
      'title',
      'description',
      'date',
      'location',
      'images',
      'createdAt',
      'updatedAt',
    ],
    properties: {
      _id: {
        bsonType: 'objectId',
        description: 'Unique id for an event in the database',
      },
      title: {
        bsonType: 'string',
        description: 'Title of the event',
      },
      description: {
        bsonType: 'string',
        description: 'Details on what the event is about',
      },
      date: {
        bsonType: 'date',
        description: 'Date when the event happens',
      },
      location: {
        bsonType: 'string',
        description: 'Venue for the event',
      },
      images: {
        bsonType: 'array',
        description:
          'Image is an array of objects with a url and public_id both as strings',
        items: {
          bsonType: 'object',
          required: ['url', 'public_id'],
          properties: {
            url: {
              bsonType: 'string',
              description: 'Url is a string and is required',
            },
            public_id: {
              bsonType: 'string',
              description: 'Public id is a string and is required',
            },
          },
        },
      },
      createdAt: {
        bsonType: 'date',
        description: 'Date the Event was created',
      },
      updatedAt: {
        bsonType: 'date',
        description: 'Date when the Event was last updated',
      },
    },
  },
};
