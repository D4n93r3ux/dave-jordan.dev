import loadExpress from './express';
import loadMongoose from './mongoose';
import type { Application, Handler, Router } from 'express';
import type { Logger } from 'winston';
import type { Config } from '../config';

export default async ({
  app,
  config,
  logger,
  httpLogger,
  mainRouter
}: {
  app: Application;
  config: Config;
  logger: Logger;
  httpLogger: Handler;
  mainRouter: Router;
}) => {
  loadExpress({ app, config, logger, httpLogger, mainRouter });
  logger.info('Express loaded');

  await loadMongoose({ config, logger });
  logger.info('Mongoose loaded');
};
