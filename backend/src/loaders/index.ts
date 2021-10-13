import loadExpress from './express';
import type { Application, Handler } from 'express';
import type { Logger } from 'winston';

export default ({
  app,
  logger,
  httpLogger
}: {
  app: Application;
  logger: Logger;
  httpLogger: Handler;
}) => {
  loadExpress({ app, logger, httpLogger });
};
