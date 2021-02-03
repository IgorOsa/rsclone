import * as dotenv from 'dotenv';
import * as path from 'path';

dotenv.config({
  path: path.join(__dirname, './../../.env'),
});

export const NODE_ENV = process.env.NODE_ENV;
export const PORT = process.env.PORT || 3333;
export const MONGO_CONNECTION_STRING = process.env.MONGO_CONNECTION_STRING;
export const DEFAULT_SALT_ROUNDS = parseInt(
  process.env.DEFAULT_SALT_ROUNDS,
  10
);
export const JWT_SECRET_KEY = process.env.JWT_SECRET_KEY;
export const JWT_EXPIRE_TIME = process.env.JWT_EXPIRE_TIME;

export const LOGS_DIR = path.join(__dirname, '../../logs');
