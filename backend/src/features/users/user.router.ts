import { Router } from 'express';
import type { Handler } from 'express';
import type { IUserController } from './user.controller';

export default ({
  userController,
  auth
}: {
  userController: IUserController;
  auth: Handler;
}): Router => {
  const router = Router();

  const { signUp, signIn, getUser } = userController;

  router.route('/signUp').post(signUp);
  router.route('/signIn').post(signIn);
  router.route('/').get(auth, getUser);

  return router;
};
