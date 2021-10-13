import di, { Lifetime, Visibility } from 'di-hard';
import config from '../config';

const container = di.createContainer('main');

container.registerValue('config', config, { visibility: Visibility.Public });

export default container;
