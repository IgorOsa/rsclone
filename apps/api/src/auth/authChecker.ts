import { Request, Response, NextFunction } from 'express';
import * as jwt from 'jsonwebtoken';

import { JWT_SECRET_KEY } from './../common/config';
import { UnauthorizedError } from './../errors/errors';
import { wrap } from './../common/asyncWrapper';

export default wrap(
  async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    const authHeader = req.header('Authorization');

    if (authHeader !== undefined) {
      const [type, token] = authHeader.split(' ');

      if (type !== 'Bearer') {
        throw new UnauthorizedError(null);
      }
      jwt.verify(token, JWT_SECRET_KEY, (err) => {
        if (err) {
          throw new UnauthorizedError(null);
        }
      });

      return next();
    }

    throw new UnauthorizedError(null);
  }
);
