import type { Request, Response } from 'express';
import { IUserReqObject, ServiceError } from '../../types';
import type { IUserService } from './user.service';

export interface IUserController {
  getUser(req: Request, res: Response): Promise<void>;
  signIn(req: Request, res: Response): Promise<void>;
  signUp(req: Request, res: Response): Promise<void>;
}

export default ({ userService }: { userService: IUserService }) => {
  const signUp = async (req: Request, res: Response) => {
    const userServiceResponse = await userService.signUp(req.body);

    if (userServiceResponse.data) {
      res.status(200).json(userServiceResponse.data);
    } else if (userServiceResponse.error === ServiceError.AlreadyExists) {
      res.status(403).json({ msg: 'User already exists' });
    }
  };

  const signIn = async (req: Request, res: Response) => {
    const userServiceResponse = await userService.signIn(req.body);

    if (userServiceResponse.data) {
      res.status(200).json(userServiceResponse.data);
    } else if (userServiceResponse.error === ServiceError.NotFound) {
      res.status(404).json({ msg: 'User not registered' });
    } else if (userServiceResponse.error === ServiceError.AuthenticationError) {
      res.status(401).json({ msg: 'Invalid password' });
    }
  };

  const getUser = async (req: Request & IUserReqObject, res: Response) => {
    const userServiceResponse = await userService.getUser(req.user.id);

    if (userServiceResponse.data) {
      res.status(200).json(userServiceResponse.data);
    } else if (userServiceResponse.error === ServiceError.NotFound) {
      res.status(404).json({ msg: 'User not found' });
    }
  };

  return {
    signUp,
    signIn,
    getUser
  };
};
