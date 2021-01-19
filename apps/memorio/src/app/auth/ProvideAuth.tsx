import { IAuthResponse, IUser } from '@memorio/api-interfaces';
import React, { createContext, useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import AuthService from './../services/auth.service';

const authContext = createContext(null);

export default function ProvideAuth({ children }) {
  const auth = useProvideAuth();


  return (
    <authContext.Provider value={auth}>
      {children}
    </authContext.Provider>
  );
}

export function useAuth() {
  return useContext(authContext);
}

export function useProvideAuth() {
  const [user, setUser] = useState(AuthService.getCurrentUser());

  useEffect(() => {
    const user = AuthService.getCurrentUser();

    if (user) {
      setUser(user);
    }
  }, [])

  const login = async (user: IUser) => {
    setUser(await AuthService.login(user));
  };

  const logout = async () => {
    await AuthService.logout();
    setUser(null);
  };

  const getCurrentUser = (): IAuthResponse => AuthService.getCurrentUser();

  return {
    user,
    login,
    logout,
    getCurrentUser
  };
}

