import mongoose from 'mongoose';
import type { Config } from '../config';
import type { Logger } from 'winston';

export default async ({ config, logger }: { config: Config; logger: Logger }) => {
  try {
    mongoose.connect(config.databaseURI, {
      // Options go here
    });
    logger.info('MongoDB connected');
  } catch (err) {
    logger.error('MongoDB connection error');
    process.exit(1);
  }
};
