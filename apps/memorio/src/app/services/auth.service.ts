import {
  IUser,
  IAuthResponse,
  IUserUpdateRequest,
} from '@memorio/api-interfaces';
import axios from 'axios';

const API_URL = '/api/';

const signup = (user: IUser) => {
  return axios.post(API_URL + 'register', user);
};

const login = async (user: IUser): Promise<IAuthResponse> => {
  const response = await axios.post(API_URL + 'login', user);
  if (response.data.token) {
    localStorage.setItem(
      'user',
      JSON.stringify({ ...response.data, username: user.login })
    );
  }
  return { ...response.data, username: user.login };
};

const logout = async () => {
  localStorage.removeItem('user');
};

const getCurrentUser = (): IAuthResponse => {
  return JSON.parse(localStorage.getItem('user'));
};

const updateCurrentUser = (user: IUserUpdateRequest) => {
  const currentUser = getCurrentUser();
  const { login, name } = user;
  const result = { ...currentUser, username: login, name };
  localStorage.setItem('user', JSON.stringify(result));
};

export default {
  signup,
  login,
  logout,
  getCurrentUser,
  updateCurrentUser,
};
