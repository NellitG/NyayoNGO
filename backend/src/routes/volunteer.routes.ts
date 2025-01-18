import express from 'express';
import { validate } from '../middleware/validateResource.js';
import { volunteerZodSchema } from '../schema/volunteer.schema.js';
import { registerVolunteer } from '../controllers/volunteer.controller.js';
import { wrapAsync } from '../utils/asyncErrorHandler.js';

export const volunteerRouter = express.Router({mergeParams: true});

volunteerRouter.post('/', validate(volunteerZodSchema), wrapAsync(registerVolunteer));