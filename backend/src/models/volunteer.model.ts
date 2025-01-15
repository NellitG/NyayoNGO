import * as mongodb from 'mongodb';

export interface Volunteer {
  _id?: mongodb.ObjectId;
  fullName: string;
  email: string;
  phoneNumber: string;
  motivation: string;
  createdAt?: Date;
  updatedAt: Date;
}

export const volunteerSchema = {
  $jsonSchema: {
    bsonType: 'object',
    required: [
      'fullName',
      'email',
      'phoneNumber',
      'motivation',
      'createdAt',
      'updatedAt',
    ],
    properties: {
      _id: {
        bsonType: 'objectId',
        description: 'Unique id for a user in MongoDb',
      },
      fullName: {
        bsonType: 'string',
        description: 'Fullname for the volunteer',
      },
      email: {
        bsonType: 'string',
        description: 'Email address for the volunteer',
      },
      phoneNumber: {
        bsonType: 'string',
        description: 'Phone number for the volunteer',
      },
      motivation: {
        bsonType: 'string',
        description: 'Brief reason for wanting to volunteer',
      },
      createdAt: {
        bsonType: 'date',
        description: 'Date the user was created',
      },
      updatedAt: {
        bsonType: 'date',
        description: 'Date when the user was last updated',
      },
    },
  },
};
