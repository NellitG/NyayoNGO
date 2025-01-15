import express from 'express';
import config from 'config';

import { logger } from './utils/logger.js';
import { connectToDatabase } from './utils/db/connectToDb.js';

const app = express();
const port = config.get<number>('server.port') || 3000;
const dbUri = config.get<string>('database.dbUri');


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