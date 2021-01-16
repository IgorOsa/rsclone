import * as usersRepo from './../users/user.service';
import * as jwt from 'jsonwebtoken';
import { JWT_SECRET_KEY, JWT_EXPIRE_TIME } from './../../common/config';
import { checkHashedPassword } from './../../common/hashHelpers';
import { AuthorizationError } from './../../common/errors';

export const signIn = async ({ login, password }) => {
  const user = await usersRepo.getByLogin({ login });

  const isValidated = await checkHashedPassword(password, user.password);

  if (!isValidated) {
    throw new AuthorizationError(null);
  }

  const token = jwt.sign({ id: user.id }, JWT_SECRET_KEY, {
    expiresIn: JWT_EXPIRE_TIME,
  });

  return { token, userId: user._id, name: user.name };
};
