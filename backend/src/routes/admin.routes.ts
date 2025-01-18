import express from 'express';

import { login, logout, register } from '../controllers/admin.controller.js';

export const adminRouter = express.Router({mergeParams: true});


adminRouter.post('/login', login);
adminRouter.post('/logout', logout);

// Delete this route before going live
adminRouter.post('/register', register)
// Delete the above route before going live