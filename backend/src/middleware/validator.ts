import type { Request, Response, NextFunction } from 'express';
import { body, validationResult } from 'express-validator';

export default (req: Request, res: Response, next: NextFunction) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    res.status(400).json({ msg: 'Validation error', errors: errors.array() });
  } else {
    next();
  }
};

export const userValidation = {
  signUp: [
    body('email', 'Please enter a valid email').isEmail(),
    body(
      'password',
      'Please enter a password with 6 or more characters'
    ).isLength({ min: 6 })
  ],
  signIn: [
    body('email', 'Please enter a valid email').isEmail(),
    body('password', 'Please enter a password').exists()
  ]
};
