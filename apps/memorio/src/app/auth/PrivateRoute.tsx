import React from 'react';
import {
  Route,
  Redirect
} from 'react-router-dom';
import AuthService from './../services/auth.service';

export function PrivateRoute({ children, ...rest }): JSX.Element {
  const auth = AuthService.getCurrentUser();

  return (
    <Route
      {...rest}
      render={({ location }) =>
        auth
          ? (
            children
          ) : (
            <Redirect
              to={{
                pathname: "/login",
                state: { from: location }
              }} />
          )} />
  );
}
