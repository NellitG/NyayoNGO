import express, { Request, Response, NextFunction } from 'express';
import config from 'config';
import methodOverride from 'method-override';

import { logger } from './utils/logger.js';
import { connectToDatabase } from './utils/db/connectToDb.js';
import { ExpressError } from './utils/ExpressError.js';
import { feedbackRouter } from './routes/feedback.routes.js';
import { volunteerRouter } from './routes/volunteer.routes.js';
import { subscriberRouter } from './routes/subscriber.routes.js';
import { galleryRouter } from './routes/gallery.routes.js';
import { eventRouter } from './routes/event.routes.js';

const app = express();
const port = config.get<number>('server.port') || 3000;
const dbUri = config.get<string>('database.dbUri');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'));

// Routes
app.use('/contact', feedbackRouter);
app.use('/volunteer', volunteerRouter);
app.use('/subscribe', subscriberRouter);
app.use('/gallery', galleryRouter);
app.use('/events', eventRouter);


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