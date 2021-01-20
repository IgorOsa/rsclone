import { IUser, IAuthResponse } from '@memorio/api-interfaces';
import axios from 'axios';

const API_URL = '/api/';

const signup = (user: IUser) => {
  return axios.post(API_URL + 'users', user);
};

const login = async (user: IUser): Promise<IAuthResponse> => {
  const response = await axios.post(API_URL + 'login', user);
  if (response.data.token) {
    localStorage.setItem('user', JSON.stringify(response.data));
  }
  return response.data;
};

const logout = async () => {
  localStorage.removeItem('user');
};

const getCurrentUser = (): IAuthResponse => {
  return JSON.parse(localStorage.getItem('user'));
};

export default {
  signup,
  login,
  logout,
  getCurrentUser,
};
