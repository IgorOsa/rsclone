import * as bcrypt from 'bcrypt';
import { DEFAULT_SALT_ROUNDS } from './config';

export const hashPassword = async (password: string) => {
  const salt = await bcrypt.genSalt(DEFAULT_SALT_ROUNDS);
  const hash = await bcrypt.hash(password, salt);

  return hash;
};

export const checkHashedPassword = async (password: string, hash: string) =>
  bcrypt.compare(password, hash);
