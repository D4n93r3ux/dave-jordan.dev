import cors from 'cors';
import express from 'express';
import type { Request, Response, NextFunction, Handler, Router } from 'express';
import type { Logger } from 'winston';

export default ({
  expressApp: app,
  logger,
  httpLogger,
  mainRouter
}: {
  expressApp: express.Application;
  httpLogger: Handler;
  logger: Logger;
  mainRouter: Router;
}) => {
  // eslint-disable-next-line
  app.use(cors());

  app.use(express.json());

  app.use(httpLogger);

  app.use(mainRouter);

  app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    logger.error(err.message);
    res.status(500).send('Internal server error');
  });
};
