import container from './ioc';
import type { Application } from 'express';
import type { Config } from './config';
import type { Logger } from 'winston';

const startServer = async () => {
  const app = (await container.resolve('app')) as Application;
  const config = container.resolve('config') as Config;
  const logger = container.resolve('logger') as Logger;

  app.listen(config.port, () => logger.info(`Server started on port ${config.port}`));
};

startServer();
