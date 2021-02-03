import { IUserStats, IUserUpdateRequest } from '@memorio/api-interfaces';
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

const getUserStats = async (id: string) => {
  return (
    await axios.get(API_URL + `users/${id}/statistics`, {
      headers: authHeader(),
    })
  ).data;
};

const updateUserStats = async (id: string, stats: IUserStats) => {
  return (
    await axios.put(API_URL + `users/${id}/statistics`, stats, {
      headers: authHeader(),
    })
  ).data;
};

export default {
  getUserById,
  updateUser,
  getUserStats,
  updateUserStats,
};
