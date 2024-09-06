import React from 'react';
import { Outlet, Navigate } from 'react-router-dom';
import {useAuthContext} from '../contexts/AuthContext';

const LoginLayout = () => {

  const {token} = useAuthContext();

  if (token) {
    return <Navigate to={'/'}/>
  }

  return (
    <div>
      <Outlet />
    </div>
  )
}

export default LoginLayout
