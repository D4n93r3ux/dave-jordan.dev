import type { Config } from './config';
import type { Logger } from 'winston';
import express from 'express';
import type { Handler, Router } from 'express';
import loaders from './loaders';

export default async ({
  config,
  logger,
  httpLogger,
  mainRouter
}: {
  config: Config;
  logger: Logger;
  httpLogger: Handler;
  mainRouter: Router;
}) => {
  const app = express();

  await loaders({ app, config, logger, httpLogger, mainRouter });

  return app;
};
