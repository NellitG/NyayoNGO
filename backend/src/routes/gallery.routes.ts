import express from 'express';
import { showGallery } from '../controllers/gallery.controller.js';

export const galleryRouter = express.Router({ mergeParams: true });

galleryRouter.get('/', showGallery);
