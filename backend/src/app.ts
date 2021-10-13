import type { Config } from './config';
import type { Logger } from 'winston';
import express from 'express';
import type { Handler } from 'express';
import loaders from './loaders';

export default async ({
  config,
  logger,
  httpLogger
}: {
  config: Config;
  logger: Logger;
  httpLogger: Handler;
}) => {
  const app = express();

  await loaders({ app, config, logger, httpLogger });

  return app;
};
