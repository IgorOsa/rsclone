import { IUserProfile } from '@memorio/api-interfaces';
import * as profileRepo from './profile.db.repository';

export const create = (profile: IUserProfile, userId: string) =>
  profileRepo.create(profile, userId);
