import React from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

const NotRequireAuth = () => {
  const isLogged = useSelector((state) => state.auth.isLogged);

  const location = useLocation();

  return !isLogged ? (
    <Outlet />
  ) : (
    <Navigate to="/home" state={{ from: location }} replace />
  );
};

export default NotRequireAuth;
