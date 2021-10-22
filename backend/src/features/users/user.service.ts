import { ServiceError } from '../../types';
import User from './user.model';
import type { IUser } from './user.model';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import type { Config } from '../../config';

export type Token = { token: string };

export type UserServiceData = IUser | Token;

export type UserServiceResponse =
  | {
      error: null;
      data: UserServiceData;
    }
  | {
      error: ServiceError;
      data: null;
    };

export interface IUserService {
  signUp(userInput: IUser): Promise<UserServiceResponse>;
  signIn(userInput: IUser): Promise<UserServiceResponse>;
  getUser(id: string): Promise<UserServiceResponse>;
}

export default ({ config }: { config: Config }): IUserService => {
  const generateToken = (id: string): Token => {
    const payload = {
      user: {
        id
      }
    };

    const token = jwt.sign(payload, config.jwtSecret, {
      expiresIn: '3 days'
    });

    return { token };
  };

  const signUp = async (userInput: IUser) => {
    let response: UserServiceResponse;

    const { email, password } = userInput;

    if (await User.findOne({ email })) {
      response = {
        error: ServiceError.AlreadyExists,
        data: null
      };
    } else {
      const salt = await bcrypt.genSalt(10);

      const hashedPassword = await bcrypt.hash(password, salt);

      const user = await User.create({
        email,
        password: hashedPassword
      });

      const token = generateToken(user.id);

      response = {
        error: null,
        data: token
      };
    }

    return response;
  };

  const signIn = async (userInput: IUser) => {
    let response: UserServiceResponse;

    const { email, password } = userInput;

    const user = await User.findOne({ email });

    if (!user) {
      response = {
        error: ServiceError.NotFound,
        data: null
      };
    } else {
      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
        response = {
          error: ServiceError.AuthenticationError,
          data: null
        };
      } else {
        const token = generateToken(user.id);
        response = {
          error: null,
          data: token
        };
      }
    }

    return response;
  };

  const getUser = async (id: string) => {
    let response: UserServiceResponse;

    const user = await User.findById(id).select('-password');

    if (!user) {
      response = {
        error: ServiceError.NotFound,
        data: null
      };
    } else {
      response = {
        error: null,
        data: user
      };
    }

    return response;
  };

  return {
    signUp,
    signIn,
    getUser
  };
};
