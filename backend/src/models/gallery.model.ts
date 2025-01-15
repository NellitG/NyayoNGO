import * as mongodb from 'mongodb';

export interface Gallery {
  _id?: mongodb.ObjectId;
  title: string;
  description: string;
  images: { url: string, public_id: string; }[];
  createdAt?: Date;
  updatedAt: Date;
};

export const gallerySchema = {
  $jsonSchema: {
    bsonType: 'object',
    required: ['title', 'description', 'images', 'createdAt', 'updatedAt'],
    properties: {
      _id: {
        bsonType: 'objectId',
        description: 'Unique id for a gallery in MongoDb'
      },
      title: {
        bsonType: 'string',
        description: 'Title for the gallery'
      },
      description: {
        bsonType: 'string',
        description: 'Description of the photos being added to the gallery'
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
        description: 'Date the gallery was created',
      },
      updatedAt: {
        bsonType: 'date',
        description: 'Date when the gallery was last updated',
      }
    }
  }
};
