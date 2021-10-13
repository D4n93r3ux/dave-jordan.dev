import { Router } from 'express';

export default ({ userRouter }: { userRouter: Router }) => {
  const router = Router();

  router.use('/users', userRouter);

  return router;
};
