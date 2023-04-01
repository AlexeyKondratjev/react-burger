import React, { FC } from 'react';
import { Redirect, Route, useLocation } from 'react-router-dom';
import { useSelector } from '../../services/hooks/hooks';
import { TLocationState, TProtectedRouteComponent } from '../../services/types/data';



export const ProtectedRoute: FC<TProtectedRouteComponent> = ({ onlyUnAuth, children, ...rest }) => {
  const { user } = useSelector(store => store.auth);
  const location = useLocation<TLocationState>();

  if (onlyUnAuth && user) {
    const { from } = location.state || { from: { pathname: '/' } };

    return (
      <Route {...rest}>
        <Redirect to={from} />
      </Route>
    );
  }

  if (!onlyUnAuth && !user) {
    return (
      <Route {...rest}>
        <Redirect to={{ pathname: '/login', state: { from: location } }} />
      </Route>
    );
  }

  return <Route {...rest}>
    {children}
  </Route>;

}
