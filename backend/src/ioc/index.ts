import di, { Lifetime, Visibility } from 'di-hard';
import config from '../config';
import createLogger from '../loaders/logger';
import createApp from '../app';
import createHttpLogger from '../middleware/httpLogger';

const container = di.createContainer('main');

container.registerValue('config', config, { visibility: Visibility.Public });
container.registerFactory('logger', createLogger, {
  visibility: Visibility.Public,
  lifetime: Lifetime.Registration
});
container.registerFactory('httpLogger', createHttpLogger, { lifetime: Lifetime.Registration });
container.registerFactory('app', createApp, { lifetime: Lifetime.Registration });

export default container;
