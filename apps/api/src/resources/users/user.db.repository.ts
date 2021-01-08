import User from './user.model';
import { NotFoundError } from './../../common/errors';
import { IUser } from '@memorio/api-interfaces';

export const getAll = async () => {
  return User.find({}, (err, data) => {
    if (err) {
      throw new NotFoundError('No users found!');
    }
    return data;
  });
};

export const get = async (id: string) => {
  const user = await User.findById({ _id: id }).exec();

  if (!user) {
    throw new NotFoundError(`User with id ${id} was not found`);
  }

  return user;
};

export const create = async (user: IUser) => User.create(user);
