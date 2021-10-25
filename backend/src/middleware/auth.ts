import type { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import type { Config } from '../config';
import type { IUserReqObject } from '../types';

export default ({ config }: { config: Config }) =>
  (req: Request & IUserReqObject, res: Response, next: NextFunction) => {
    try {
      const token = req.headers['x-auth-token'] as string;
      const decoded = jwt.verify(token, config.jwtSecret) as IUserReqObject;
      req.user = { id: decoded.user.id };
      next();
    } catch (err) {
      res.status(401).json({ msg: 'Not authorised' });
    }
  };
