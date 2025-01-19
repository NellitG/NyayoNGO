import express from 'express';
import { showAllEvents, showOneEvent } from '../controllers/event.controller.js';
import { wrapAsync } from '../utils/asyncErrorHandler.js';

export const eventRouter = express.Router({ mergeParams: true });

eventRouter.get('/', wrapAsync(showAllEvents));

eventRouter.get('/:id', wrapAsync(showOneEvent));
