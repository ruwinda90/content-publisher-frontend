import React from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

const RequireAuth = () => {
  const isLogged = useSelector((state) => state.auth.isLogged);
  const location = useLocation();

  return isLogged ? (
    <Outlet />
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
  );
};

export default RequireAuth;
