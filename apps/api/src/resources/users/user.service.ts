import {
  IUserProfile,
  IUserRequest,
  IUserUpdateRequest,
} from '@memorio/api-interfaces';
import * as usersRepo from './user.db.repository';
import { IUserResponse } from './user.model';
import * as profileService from './profile.service';

export const getAll = () => usersRepo.getAll();

export const get = (id: string) => usersRepo.get(id);

export const getByLogin = (user: IUserResponse) =>
  usersRepo.getByLogin(user.login);

export const create = async (user: IUserRequest) => {
  const userEntity = await usersRepo.create(user);

  let profile: IUserProfile = { lang: 'ru', lang2learn: 'en' };

  if (user.profile) {
    profile = user.profile;
  }

  await profileService.create(profile, userEntity.id);

  return userEntity;
};

export const update = async (id: string, user: IUserUpdateRequest) => {
  if (user.profile) {
    const { profile } = user;
    await profileService.update(id, profile);
  }

  return usersRepo.update(id, user);
};

// const remove = async (id) => {
//   return usersRepo.remove(id);
// };
