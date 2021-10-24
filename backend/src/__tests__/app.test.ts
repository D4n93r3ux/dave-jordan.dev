import request from 'supertest';
import container from '../ioc';
import type { Container } from 'di-hard';
import { MongoMemoryServer } from 'mongodb-memory-server';
import createApp from '../app';
import createLogger from '../loaders/logger';
import loaders from '../loaders';
import createHttpLogger from '../middleware/httpLogger';
import type { Application } from 'express';

let testContainer: Container;
let mongoServer: MongoMemoryServer;
let app: Application;

beforeAll(async () => {
  mongoServer = await MongoMemoryServer.create();
  const originalConfig = container.resolve('config');
  const testConfig = {
    ...originalConfig,
    logging: { level: 'error' },
    databaseURI: mongoServer.getUri()
  };

  testContainer = container.child('testContainer');

  testContainer.registerValue('config', testConfig);
  testContainer.registerFactory('app', createApp);
  testContainer.registerFactory('loaders', loaders);
  testContainer.registerFactory('logger', createLogger);
  testContainer.registerFactory('httpLogger', createHttpLogger);

  app = await testContainer.resolve('app');
});

afterAll(async () => {
  if (mongoServer) {
    await mongoServer.stop();
  }
});

describe('POST /users/signUp', () => {
  describe('when supplying a valid email and password', () => {
    it('should return an object with a token key', async () => {
      const body = {
        email: 'just@anotheremail.com',
        password: 'password'
      };
      const res = await request(app).post('/api/users/signUp').send(body);
      expect(res.body).toHaveProperty('token');
    });
  });

  describe('when supplying an email address without a password', () => {
    it('should return a status of 400', async () => {
      const body = {
        email: 'hello@isitmeyourelookingfor.com'
      };
      const res = await request(app).post('/api/users/signUp').send(body);
      expect(res.status).toBe(400);
    });
  });

  describe('when supplying a password but no email address', () => {
    it('should return a status of 400', async () => {
      const body = {
        password: 'whoopsvicar'
      };
      const res = await request(app).post('/api/users/signUp').send(body);
      expect(res.status).toBe(400);
    });
  });

  describe('when supplying an invalid email address', () => {
    it('should return a status of 400', async () => {
      const bodyData = [
        {
          email: 'invalidnoatsymbol.com',
          password: 'validpassword'
        },
        { email: 'invalid@nosuffix', password: 'stillvalid' },
        { email: 'invalid@illegalcharacters%.com' }
      ];
      for (const body in bodyData) {
        const res = await request(app).post('/api/users/signUp').send(body);
        expect(res.status).toBe(400);
      }
    });
  });

  describe('when supplying a valid email address but password shorter than 6 characters', () => {
    it('should return a status of 400', async () => {
      const body = {
        email: 'thisis@fine.com',
        password: 'notme'
      };
      const res = await request(app).post('/api/users/signUp').send(body);
      expect(res.status).toBe(400);
    });
  });
});

describe('POST /users/signIn', () => {
  describe('when supplying an email and password that have previously been registered', () => {
    it('should return an object with a token key', async () => {
      const body = {
        email: 'yet@anotheremail.com',
        password: 'anotherpassword'
      };
      let res = await request(app).post('/api/users/signUp').send(body);
      expect(res.body).toHaveProperty('token');
      res = await request(app).post('/api/users/signIn').send(body);
      expect(res.body).toHaveProperty('token');
    });
  });

  describe('when supplying an email and password that have not been previously registered', () => {
    it('should return a status of 404', async () => {
      const body = {
        email: 'not@previouslyregistered.com',
        password: 'doesntmatter'
      };
      const res = await request(app).post('/api/users/signIn').send(body);
      expect(res.status).toBe(404);
    });
  });
});

describe('GET /users', () => {
  describe('when the request header includes a valid json web token as x-auth-token', () => {
    it('should return a user record from the database with _id and email keys', async () => {
      const body = {
        email: 'hello@email.com',
        password: 'meowmeow'
      };
      let res = await request(app).post('/api/users/signUp').send(body);
      const { token } = res.body;
      res = await request(app).get('/api/users').set('x-auth-token', token);
      expect(res.body).toHaveProperty('_id');
      expect(res.body).toHaveProperty('email');
    });
  });

  describe('when the request header includes an invalid json web token as x-auth-token', () => {
    it('should return a status of 401', async () => {
      const res = await request(app)
        .get('/api/users')
        .set('x-auth-token', 'obviouslyNotARealToken');
      expect(res.status).toBe(401);
    });
  });
});
