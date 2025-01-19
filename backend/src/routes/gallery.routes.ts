import express from 'express';
import { showGallery } from '../controllers/gallery.controller.js';
import { wrapAsync } from '../utils/asyncErrorHandler.js';

export const galleryRouter = express.Router({ mergeParams: true });

galleryRouter.get('/', wrapAsync(showGallery));
