import express from 'express';
import { validate } from '../middleware/validateResource.js';
import { feedbackZodSchema } from '../schema/feedback.schema.js';
import { wrapAsync } from '../utils/asyncErrorHandler.js';
import { createFeedback } from '../controllers/feedback.controller.js';

export const feedbackRouter = express.Router({mergeParams: true})

// Route to handle creation a new feedback from user
feedbackRouter.post('/', validate(feedbackZodSchema), wrapAsync(createFeedback));