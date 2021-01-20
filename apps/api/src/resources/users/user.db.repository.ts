import User, { IUserModel } from './user.model';
import { EntityExistsError, NotFoundError } from './../../errors/errors';
import { IUser } from '@memorio/api-interfaces';

const MONGO_ENTITY_EXISTS_ERROR_CODE = 11000;

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

export const getByLogin = async (login: string) => {
  const user = await User.findOne({ login });

  if (!user) {
    throw new NotFoundError(`Wrong login data!`);
  }

  return user;
};

export const create = async (user: IUser) => {
  try {
    return await User.create(user);
  } catch (err) {
    if (err.code === MONGO_ENTITY_EXISTS_ERROR_CODE) {
      throw new EntityExistsError(`User exists`);
    } else {
      throw err;
    }
  }
};

export const update = async (
  id: string,
  user: IUserModel
): Promise<IUserModel> => {
  const updatedUser = await User.findOneAndUpdate({ _id: id }, user);

  if (!updatedUser) {
    throw new NotFoundError(`User with id: ${id} not found!`);
  }

  return updatedUser;
};
