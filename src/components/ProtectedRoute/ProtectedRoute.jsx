import React from 'react';
import { Redirect, Route, useLocation } from 'react-router-dom';
import { getCookie } from '../../utils/cookie';



export function ProtectedRoute({ children, ...rest }) {
  const isUserAuth = getCookie('token');
  const location = useLocation();

  console.log('ProtectedRoute. location ', location);

  return (
    <Route
      {...rest}
      render={() =>
        isUserAuth ? (
          children
        ) : (
          <Redirect to={{ pathname: '/login', state: { from: location } }} />
        )
      }
    />
  );
}
