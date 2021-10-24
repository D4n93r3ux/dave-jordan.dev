import { Router } from 'express';
import type { Handler } from 'express';
import type { IUserController } from './user.controller';
import validator, { userValidation } from '../../middleware/validator';

export default ({
  userController,
  auth
}: {
  userController: IUserController;
  auth: Handler;
}): Router => {
  const router = Router();

  const { signUp, signIn, getUser } = userController;

  router.route('/signUp').post(userValidation.signUp, validator, signUp);
  router.route('/signIn').post(userValidation.signIn, validator, signIn);
  router.route('/').get(auth, getUser);

  return router;
};
