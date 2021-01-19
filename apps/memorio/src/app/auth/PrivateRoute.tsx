import React from 'react';
import {
  Route,
  Redirect
} from 'react-router-dom';
import { useAuth } from './ProvideAuth';

export function PrivateRoute({ children, ...rest }): JSX.Element {
  const auth = useAuth();

  return (
    <Route
      {...rest}
      render={({ location }) =>
        auth.user
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
