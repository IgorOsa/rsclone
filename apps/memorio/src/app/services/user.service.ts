import { IUserUpdateRequest } from '@memorio/api-interfaces';
import axios from 'axios';
import authHeader from './auth-header';

const API_URL = '/api/';

const getUserById = (id: string) => {
  return axios.get(API_URL + `users/${id}`, { headers: authHeader() });
};

const updateUser = (id: string, user: IUserUpdateRequest) => {
  return axios.put(API_URL + `users/${id}`, user, {
    headers: authHeader(),
  });
};

export default {
  getUserById,
  updateUser,
};
