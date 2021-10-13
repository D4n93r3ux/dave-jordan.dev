import di, { Lifetime, Visibility } from 'di-hard';
import config from '../config';
import createLogger from '../loaders/logger';
import createApp from '../app';
import createHttpLogger from '../middleware/httpLogger';
import createMainRouter from '../features';
import { createUserRouter, createUserController } from '../features/users';

const container = di.createContainer('main');

container.registerFactory('app', createApp, { lifetime: Lifetime.Registration });

container.registerValue('config', config, { visibility: Visibility.Public });
container.registerFactory('logger', createLogger, {
  visibility: Visibility.Public,
  lifetime: Lifetime.Registration
});
container.registerFactory('httpLogger', createHttpLogger, { lifetime: Lifetime.Registration });

container.registerFactory('mainRouter', createMainRouter, { lifetime: Lifetime.Registration });

container.registerFactory('userRouter', createUserRouter, {
  lifetime: Lifetime.Registration,
  visibility: Visibility.Public
});
container.registerFactory('userController', createUserController, {
  lifetime: Lifetime.Registration,
  visibility: Visibility.Public
});

export default container;
