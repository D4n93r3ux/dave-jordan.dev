import { Router } from 'express';
import type { IUserController } from './user.controller';

export default ({ userController }: { userController: IUserController }): Router => {
  const router = Router();

  const { signUp, signIn, getUser } = userController;

  router.route('/signUp').post(signUp);
  router.route('/signIn').post(signIn);
  router.route('/').get(getUser);

  return router;
};
