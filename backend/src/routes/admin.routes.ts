import express from 'express';

import { login, logout, register } from '../controllers/admin.controller.js';
import { deleteEvent, editEventForm, showAllEvents, showOneEvent } from '../controllers/event.controller.js';
import { isLoggedIn } from '../middleware/isLoggedIn.js';
import { showAllDonations } from '../controllers/donation.controller.js';
import { wrapAsync } from '../utils/asyncErrorHandler.js';
import { showAllVolunteers } from '../controllers/volunteer.controller.js';
import { showAllFeedback } from '../controllers/feedback.controller.js';

export const adminRouter = express.Router({mergeParams: true});

adminRouter.post('/login', login);
adminRouter.post('/logout', logout);

adminRouter.get('/events', isLoggedIn, wrapAsync(showAllEvents));
adminRouter.get('/events/:id', isLoggedIn, wrapAsync(showOneEvent));
adminRouter.get('/events/:id/edit', isLoggedIn, wrapAsync(editEventForm));
adminRouter.delete('/events/:id', isLoggedIn, wrapAsync(deleteEvent));

// NOT DONE - End point for create, edit event, gallery, will do after adding image upload

adminRouter.get('/donations', isLoggedIn, wrapAsync(showAllDonations));

adminRouter.get('/volunteers', isLoggedIn, wrapAsync(showAllVolunteers));

adminRouter.get('/feedback', isLoggedIn, wrapAsync(showAllFeedback))

// Delete this route before going live
adminRouter.post('/register', register)
// Delete the above route before going live