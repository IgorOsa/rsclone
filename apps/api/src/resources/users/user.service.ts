import { IUser } from '@memorio/api-interfaces';
import * as usersRepo from './user.db.repository';

export const getAll = () => usersRepo.getAll();

export const get = (id: string) => usersRepo.get(id);

// const getByLogin = (login) => usersRepo.getByLogin(login);

export const create = (user: IUser) => usersRepo.create(user);

// const update = (user) => usersRepo.update(user);

// const remove = async (id) => {
//   return usersRepo.remove(id);
// };
