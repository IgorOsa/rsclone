export interface Message {
  message: string;
}

export interface IUser {
  name?: string;
  login: string;
  password: string;
}

export interface IAuthResponse {
  message: string;
  name: string;
  token: string;
  userId: string;
}
