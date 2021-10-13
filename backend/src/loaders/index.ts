import loadExpress from './express';
import loadMongoose from './mongoose';
import type { Application, Handler } from 'express';
import type { Logger } from 'winston';
import type { Config } from '../config';

export default async ({
  app,
  config,
  logger,
  httpLogger
}: {
  app: Application;
  config: Config;
  logger: Logger;
  httpLogger: Handler;
}) => {
  loadExpress({ app, logger, httpLogger });
  loadMongoose({ config, logger });
};
