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
  lifetime: Lifetime.Registration,
  visibility: Visibility.Public
});

container.registerValue('expressApp', express());
container.registerFactory('loaders', loaders, {
  lifetime: Lifetime.Registration,
  visibility: Visibility.Public
});

container.registerValue('config', config, { visibility: Visibility.Public });
container.registerFactory('logger', createLogger, {
  lifetime: Lifetime.Registration,
  visibility: Visibility.Public
});
container.registerFactory('httpLogger', createHttpLogger, {
  lifetime: Lifetime.Registration,
  visibility: Visibility.Public
});
container.registerFactory('mainRouter', createMainRouter, {
  lifetime: Lifetime.Registration,
  visibility: Visibility.Public
});

container.registerFactory('auth', createAuthMiddleware, {
  lifetime: Lifetime.Registration,
  visibility: Visibility.Public
});

// =============================================================== /users route
container.registerFactory('userRouter', createUserRouter, {
  lifetime: Lifetime.Registration,
  visibility: Visibility.Public
});
container.registerFactory('userController', createUserController, {
  lifetime: Lifetime.Registration,
  visibility: Visibility.Public
});
container.registerFactory('userService', createUserService, {
  lifetime: Lifetime.Registration,
  visibility: Visibility.Public
});

export default container;
