import express from 'express';
import { validate } from '../middleware/validateResource.js';
import { subscriberZodSchema } from '../schema/subscriber.schema.js';
import { wrapAsync } from '../utils/asyncErrorHandler.js';
import { registerSubscriber } from '../controllers/subscriber.controller.js';

export const subscriberRouter = express.Router({mergeParams: true});

subscriberRouter.post('/', validate(subscriberZodSchema), wrapAsync(registerSubscriber))