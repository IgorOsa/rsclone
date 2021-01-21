import { StatusCodes, ReasonPhrases } from 'http-status-codes';

export const errorHandler = (err, req, res, next) => {
  if (err.status) {
    res.status(err.status).send(err.message);
  } else {
    // logger.error(err.stack);
    console.log(err.stack);

    res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .send(ReasonPhrases.INTERNAL_SERVER_ERROR);
  }
  next();
};
