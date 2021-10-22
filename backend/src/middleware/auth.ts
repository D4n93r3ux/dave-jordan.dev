import type { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import type { JwtPayload } from 'jsonwebtoken';
import type { Config } from '../config';

export default ({ config }: { config: Config }) =>
  (req: Request, res: Response, next: NextFunction) => {
    try {
      const token = req.headers['x-auth-token'] as string;
      const decoded = jwt.verify(token, config.jwtSecret) as JwtPayload;
      req.user = { id: decoded.user.id };
      next();
    } catch (err) {
      res.status(401).json({ msg: 'Not authorised' });
    }
  };
