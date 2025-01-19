import * as mongodb from 'mongodb';

export interface Admin {
  _id?: mongodb.ObjectId;
  username: string;
  password: string;
  createdAt?: Date;
  updatedAt: Date;
};

export const adminSchema = {
  $jsonSchema: {
    bsonType: 'object',
    required: ['username', 'password', 'createdAt', 'updatedAt'],
    properties: {
      _id: {
        bsonType: 'objectId',
        description: 'Unique id for an admin user account in the database'
      },
      username: {
        bsonType: 'string',
        description: 'Username for the admin user'
      },
      password: {
        bsonType: 'string',
        description: 'Hashed password for the admin'
      },
      createdAt: {
        bsonType: 'date',
        description: 'Date the admin was created',
      },
      updatedAt: {
        bsonType: 'date',
        description: 'Date when the admin was last updated',
      }
    }
  }
};