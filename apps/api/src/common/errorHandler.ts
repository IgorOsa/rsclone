import { NotFoundError, AuthorizationError, UnauthorizedError } from './errors';

export const handleErrors = (err, req, res, next) => {
  if (
    err instanceof NotFoundError ||
    err instanceof AuthorizationError ||
    err instanceof UnauthorizedError
  ) {
    res.status(err.status).send(err.message);
  } else if (err) {
    console.error(err);
    res.status(500).send('Internal Server Error');
  }
  next();
};
