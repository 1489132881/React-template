import React from "react";
import logo from "./assets/logo.svg";
import "./App.css";
import { HashRouter, Route, Routes, useLocation, Navigate, Outlet, useSearchParams, useNavigate } from 'react-router-dom';
import { Frontend } from "./pages/p1";
import { Backend } from "./pages/p2";
import { ROUTES } from "./constants";
export default function Root() {
  return (
    <AppRooter />
  );
}


const AppRooter = () => {
  return (
    <>
      <HashRouter>
        <Routes>
          <Route path="/frontend" element={<Navigate to={ROUTES.Frontend} />} />
          <Route path="/backend" element={<Backend />} />
        </Routes>
      </HashRouter>
    </>
  );}