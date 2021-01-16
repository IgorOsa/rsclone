import { IUser } from '@memorio/api-interfaces';
import * as usersRepo from './user.db.repository';
import { IUserModel } from './user.model';

export const getAll = () => usersRepo.getAll();

export const get = (id: string) => usersRepo.get(id);

// const getByLogin = (login) => usersRepo.getByLogin(login);

export const create = (user: IUser) => usersRepo.create(user);

export const update = (id: string, user: IUserModel) =>
  usersRepo.update(id, user);

// const remove = async (id) => {
//   return usersRepo.remove(id);
// };
