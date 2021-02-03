export interface Message {
  message: string;
}

export interface IUser {
  name?: string;
  login: string;
  password: string;
}

export interface IUserRequest extends IUser {
  profile?: IUserProfile;
}

export type IUserUpdateRequest = Partial<IUserRequest>;
export interface IUserProfile {
  lang?: string;
  lang2learn?: string;
  userId?: string;
  statistics?: unknown;
}

export interface IUserStats {
  learnedWords?: number;
  finishedTasks?: number;
  mistakes?: number;
  correct?: number;
}

export interface IAuthResponse {
  message: string;
  name: string;
  token: string;
  userId: string;
  username?: string;
}

export interface ICourse {
  title: string;
  description: string;
  owner: string;
  available: boolean;
}
