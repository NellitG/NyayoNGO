import express from 'express';
import multer from 'multer';

import { login, logout, register } from '../controllers/admin.controller.js';
import { createEvent, deleteEvent, editEventForm, showAllEvents, showOneEvent } from '../controllers/event.controller.js';
import { isLoggedIn } from '../middleware/isLoggedIn.js';
import { showAllDonations } from '../controllers/donation.controller.js';
import { wrapAsync } from '../utils/asyncErrorHandler.js';
import { showAllVolunteers } from '../controllers/volunteer.controller.js';
import { showAllFeedback } from '../controllers/feedback.controller.js';
import { storage } from '../utils/upload/cloudinary.js';
import { validate } from '../middleware/validateResource.js';
import { eventZodSchema } from '../schema/event.schema.js';
import { createGallery, showGallery } from '../controllers/gallery.controller.js';
import { galleryZodSchema } from '../schema/gallery.schema.js';

const upload = multer({storage: storage, limits: {fileSize: 2 * 1024 * 1024, files: 5}})

export const adminRouter = express.Router({mergeParams: true});

adminRouter.post('/login', login);
adminRouter.post('/logout', logout);

adminRouter.get('/events', isLoggedIn, wrapAsync(showAllEvents));
adminRouter.post('/events', isLoggedIn, upload.array('events[images]'), validate(eventZodSchema), wrapAsync(createEvent));
adminRouter.get('/events/:id', isLoggedIn, wrapAsync(showOneEvent));
adminRouter.get('/events/:id/edit', isLoggedIn, wrapAsync(editEventForm));
adminRouter.delete('/events/:id', isLoggedIn, wrapAsync(deleteEvent));

adminRouter.get('/gallery', isLoggedIn, wrapAsync(showGallery));
adminRouter.post('/gallery', isLoggedIn, upload.array('gallery[images]'), validate(galleryZodSchema), wrapAsync(createGallery));

// NOT DONE - End point for create, edit event, gallery, will do after adding image upload

adminRouter.get('/donations', isLoggedIn, wrapAsync(showAllDonations));

adminRouter.get('/volunteers', isLoggedIn, wrapAsync(showAllVolunteers));

adminRouter.get('/feedback', isLoggedIn, wrapAsync(showAllFeedback))

// Delete this route before going live
adminRouter.post('/register', register)
// Delete the above route before going live