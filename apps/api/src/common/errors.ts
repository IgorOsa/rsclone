import { ReasonPhrases, StatusCodes } from 'http-status-codes';

class AppError extends Error {
  status: string | StatusCodes;
  constructor(message: string | ReasonPhrases) {
    super(message);
  }
}

export class NotFoundError extends AppError {
  constructor(message: string | ReasonPhrases) {
    super(message);
    this.status = StatusCodes.NOT_FOUND;
  }
}

export class UnauthorizedError extends AppError {
  constructor(message: string | ReasonPhrases) {
    super(message || ReasonPhrases.UNAUTHORIZED);
    this.status = StatusCodes.UNAUTHORIZED;
  }
}

export class AuthorizationError extends AppError {
  constructor(message: string | ReasonPhrases) {
    super(message || ReasonPhrases.UNAUTHORIZED);
    this.status = StatusCodes.UNAUTHORIZED;
  }
}

export class AuthenticationError extends AppError {
  constructor(message: string | ReasonPhrases) {
    super(message || ReasonPhrases.FORBIDDEN);
    this.status = StatusCodes.FORBIDDEN;
  }
}

export class EntityExistsError extends AppError {
  constructor(message: string | ReasonPhrases) {
    super(message);
    this.status = StatusCodes.EXPECTATION_FAILED;
  }
}
