import di, { Lifetime, Visibility } from 'di-hard';
import config from '../config';
import createLogger from '../loaders/logger';
import loaders from '../loaders';
import createApp from '../app';
import createHttpLogger from '../middleware/httpLogger';
import createAuthMiddleware from '../middleware/auth';
import createMainRouter from '../features';
import {
  createUserService,
  createUserRouter,
  createUserController
} from '../features/users';
import express from 'express';

const container = di.createContainer('main');

container.registerFactory('app', createApp, {
  lifetime: Lifetime.Registration
});

container.registerValue('expressApp', express());
container.registerValue('config', config, { visibility: Visibility.Public });
container.registerFactory('logger', createLogger, {
  visibility: Visibility.Public,
  lifetime: Lifetime.Registration
});
container.registerFactory('httpLogger', createHttpLogger, {
  lifetime: Lifetime.Registration
});
container.registerFactory('auth', createAuthMiddleware, {
  visibility: Visibility.Public,
  lifetime: Lifetime.Registration
});
container.registerFactory('loaders', loaders);

container.registerFactory('mainRouter', createMainRouter, {
  lifetime: Lifetime.Registration
});

// ===================================================================== /users
container.registerFactory('userRouter', createUserRouter, {
  lifetime: Lifetime.Registration,
  visibility: Visibility.Public
});
container.registerFactory('userController', createUserController, {
  lifetime: Lifetime.Registration,
  visibility: Visibility.Public
});
container.registerFactory('userService', createUserService, {
  lifetime: Lifetime.Registration
});

export default container;
