import * as mongodb from 'mongodb';

export interface Feedback {
  _id?: mongodb.ObjectId;
  name: string; 
  email: string;
  phoneNumber: string;
  message: string;
  createdAt?: Date;
  updatedAt: Date;
};

export const feedbackSchema = {
  $jsonSchema: {
    bsonType: 'object',
    required: ['name', 'email', 'phoneNumber', 'message', 'createdAt', 'updatedAt'],
    properties: {
      _id: {
        bsonType: 'objectId',
        description: 'Unique id for a user feedback in the database'
      },
      name: {
        bsonType: 'string',
        description: 'Name for the user giving feedback'
      },
      email: {
        bsonType: 'string',
        description: 'Email address of the user giving feedback'
      },
      message: {
        bsonType: 'string',
        description: 'Feedback message from a user'
      },
      createdAt: {
        bsonType: 'date',
        description: 'Date the feedback was given',
      },
      updatedAt: {
        bsonType: 'date',
        description: 'Date when the feedback was last updated',
      }
    }
  }
}