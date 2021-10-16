import express from 'express';
import type { Request, Response, NextFunction, Handler, Router } from 'express';
import type { Config } from '../config';
import type { Logger } from 'winston';

export default ({
  expressApp: app,
  config,
  logger,
  httpLogger,
  mainRouter
}: {
  expressApp: express.Application;
  config: Config;
  logger: Logger;
  httpLogger: Handler;
  mainRouter: Router;
}) => {
  app.use(express.json());

  app.use(httpLogger);

  app.use(config.api.prefix, mainRouter);

  app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    logger.error(err.message);
    res.status(500).send('Internal server error');
  });
};
