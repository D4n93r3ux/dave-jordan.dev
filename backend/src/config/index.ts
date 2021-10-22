import dotenv from 'dotenv';

const envFound = dotenv.config();

if (envFound.error) {
  throw new Error('.env file not found');
}

export type Config = {
  api: {
    prefix: string;
  };
  databaseURI: string;
  jwtSecret: string;
  logging: {
    level: string;
  };
  port: number;
};

const config: Config = {
  port: process.env.PORT as unknown as number,
  databaseURI: process.env.DATABASE_URI as string,
  jwtSecret: process.env.JWT_SECRET as string,
  logging: {
    level: 'debug'
  },
  api: {
    prefix: '/api'
  }
};

export default config;
