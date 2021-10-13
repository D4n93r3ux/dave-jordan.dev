import express from 'express';
import type { Request, Response, NextFunction, Handler } from 'express';
import type { Logger } from 'winston';

export default ({
  app,
  logger,
  httpLogger
}: {
  app: express.Application;
  logger: Logger;
  httpLogger: Handler;
}) => {
  app.use(express.json());

  app.use(httpLogger);

  app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    logger.error(err.message);
    res.status(500).send('Internal server error');
  });
};
