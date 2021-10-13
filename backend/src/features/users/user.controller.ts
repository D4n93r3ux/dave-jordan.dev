import type { Request, Response } from 'express';

export interface IUserController {
  signUp(req: Request, res: Response): Promise<void>;
  signIn(req: Request, res: Response): Promise<void>;
  getUser(req: Request, res: Response): Promise<void>;
}

export default () => {
  const signUp = async (req: Request, res: Response) => {
    res.status(200).send('signUp');
  };

  const signIn = async (req: Request, res: Response) => {
    res.status(200).send('signIn');
  };

  const getUser = async (req: Request, res: Response) => {
    res.status(200).send('getUser');
  };

  return {
    signUp,
    signIn,
    getUser
  };
};
