export class NotFoundError extends Error {
  status: string;
  constructor(message = 'Not found') {
    super(message);
    this.status = '404';
  }
}

export class UnauthorizedError extends Error {
  status: string;
  constructor(message = 'Unauthorized') {
    super(message);
    this.status = '401';
  }
}

export class AuthorizationError extends Error {
  status: string;
  constructor(message = 'Forbidden') {
    super(message);
    this.status = '403';
  }
}
