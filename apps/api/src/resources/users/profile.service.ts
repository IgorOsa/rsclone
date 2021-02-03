import { IUserProfile, IUserStats } from '@memorio/api-interfaces';
import * as profileRepo from './profile.db.repository';

export const create = (profile: IUserProfile, userId: string) =>
  profileRepo.create(profile, userId);

export const update = (id: string, profile: IUserProfile) =>
  profileRepo.update(id, profile);

export const getUserStats = (id: string) => profileRepo.getUserStats(id);

export const updateUserStats = (id: string, stats: IUserStats) =>
  profileRepo.updateUserStats(id, stats);
