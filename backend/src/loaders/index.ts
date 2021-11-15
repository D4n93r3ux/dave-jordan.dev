import type { Application, Handler, Router } from 'express';
import type { Logger } from 'winston';
import type { Config } from '../config';
import loadExpress from './express';
import loadMongoose from './mongoose';

export default async ({
  expressApp,
  config,
  logger,
  httpLogger,
  mainRouter
}: {
  config: Config;
  expressApp: Application;
  httpLogger: Handler;
  logger: Logger;
  mainRouter: Router;
}) => {
  loadExpress({ expressApp, logger, httpLogger, mainRouter });
  logger.info('Express loaded');

  await loadMongoose({ config, logger });
  logger.info('Mongoose loaded');
};
