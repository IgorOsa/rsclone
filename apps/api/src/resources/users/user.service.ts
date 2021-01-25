import { IUserRequest } from '@memorio/api-interfaces';
import * as usersRepo from './user.db.repository';
import { IUserModel, IUserResponse } from './user.model';
import * as profileService from './profile.service';

export const getAll = () => usersRepo.getAll();

export const get = (id: string) => usersRepo.get(id);

export const getByLogin = (user: IUserResponse) =>
  usersRepo.getByLogin(user.login);

export const create = async (user: IUserRequest) => {
  const userEntity = await usersRepo.create(user);
  if (user.profile) {
    const { profile } = user;
    await profileService.create(JSON.parse(profile), userEntity.id);
  }

  return userEntity;
};

export const update = async (id: string, user: IUserRequest & IUserModel) => {
  if (user.profile) {
    const { profile } = user;
    await profileService.update(id, JSON.parse(profile));
  }

  return usersRepo.update(id, user);
};

// const remove = async (id) => {
//   return usersRepo.remove(id);
// };
