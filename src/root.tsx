import React from 'react';
import { HashRouter, Navigate, Route, Routes } from 'react-router-dom';

import { ROUTES } from './constants';
import { Frontend } from './pages/p1';
import { Login } from './pages/p1/login';
import { Backend } from './pages/p2';
export default function Root() {
  return <AppRooter />;
}

const AppRooter = () => {
  return (
    <>
      <HashRouter>
        <Routes>
          <Route path='/' element={<Navigate to={ROUTES.Frontend} />} />
          <Route path='/frontend' element={<Frontend />} />
          <Route path='/backend' element={<Backend />} />
          <Route path='/login' element={<Login />} />
        </Routes>
      </HashRouter>
    </>
  );
};
