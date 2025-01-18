import express, { Request, Response, NextFunction } from 'express';
import config from 'config';
import methodOverride from 'method-override';
import session from 'express-session';
import MongoStore from 'connect-mongo';
import passport from 'passport';

import { logger } from './utils/logger.js';
import { connectToDatabase } from './utils/db/connectToDb.js';
import { ExpressError } from './utils/ExpressError.js';
import { feedbackRouter } from './routes/feedback.routes.js';
import { volunteerRouter } from './routes/volunteer.routes.js';
import { subscriberRouter } from './routes/subscriber.routes.js';
import { galleryRouter } from './routes/gallery.routes.js';
import { eventRouter } from './routes/event.routes.js';
import { localStrategy } from './utils/auth/localStrategy.js';
import { adminRouter } from './routes/admin.routes.js';

const app = express();
const port = config.get<number>('server.port') || 3000;
const dbUri = config.get<string>('database.dbUri');
const secret = config.get<string>('session.secret');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'));

const store = MongoStore.create({
  mongoUrl: dbUri,
  dbName: 'Nyayo',
  touchAfter: 24 * 60 * 60,
  crypto: {
      secret: secret
  }
});

store.on('error', function(e) {
  logger.error('Sessions Store Error', e)
})

const sessionConfig = {
  store: store,
  name: 'zrnmhzy',
  secret: secret,
  resave: false,
  saveUninitialized: true,
  cookie: {
    httpOnly: true,
    // secure: true,
    maxAge: 1000 * 60 * 60 * 24 * 7
  }
}

app.use(session(sessionConfig));

// Passport - Should be AFTER session, and BEFORE the router
app.use(passport.initialize()); // Initialize passport
app.use(passport.session());
passport.use(localStrategy);

// Routes
app.use('/contact', feedbackRouter);
app.use('/volunteer', volunteerRouter);
app.use('/subscribe', subscriberRouter);
app.use('/gallery', galleryRouter);
app.use('/events', eventRouter);
app.use('/supervisor-panel', adminRouter);


// Error handling middleware
app.use((err: any, req: Request, res: Response, next: NextFunction) => {
  const statusCode = err instanceof ExpressError ? err.statusCode : 500;
  const message = err.message || 'Something went wrong';

  // check accept headers sent by the client to determine preferred media type in response
  if (req.accepts('html')) {
    res.status(statusCode).send(`${statusCode} - ${message}`)
  } else {
    res.status(statusCode).json({error: message, details: err.details || []})
  }
})

try {
  await connectToDatabase(dbUri);
  logger.info('DATABASE CONNECTED!');

  app.listen(port, () => {
    logger.info(`Nyayo Backend runnning at http://localhost:${port}`);
  });
} catch (error) {
  logger.error('FAILED TO CONNECT TO DATABASE');
  process.exit(1);
}