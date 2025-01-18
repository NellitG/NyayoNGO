import express from 'express';
import { showAllEvents, showOneEvent } from '../controllers/event.controller.js';

export const eventRouter = express.Router({ mergeParams: true });

eventRouter.get('/', showAllEvents);

eventRouter.get('/:id', showOneEvent);
