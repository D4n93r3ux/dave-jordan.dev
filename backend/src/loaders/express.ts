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
  // const whitelist = ['https://dave-jordan.dev', 'https://www.dave-jordan.dev'];
  // const corsOptions: CorsOptions = {
  //   origin: (origin: string, callback: ) => {
  //     if (whitelist.indexOf(origin) !== -1) {
  //       callback(null, true);
  //     } else {
  //       callback(new Error('Not allowed by CORS'));
  //     }
  //   }
  // }

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
