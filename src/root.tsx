import React from 'react';
import { HashRouter, Navigate, Route, Routes } from 'react-router-dom';

import './App.css';
import { ROUTES } from './constants';
import { Backend } from './pages/p2';
export default function Root() {
  return <AppRooter />;
}

const AppRooter = () => {
  return (
    <>
      <HashRouter>
        <Routes>
          <Route path='/frontend' element={<Navigate to={ROUTES.Frontend} />} />
          <Route path='/backend' element={<Backend />} />
        </Routes>
      </HashRouter>
    </>
  );
};
