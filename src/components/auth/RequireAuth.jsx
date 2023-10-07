import React from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

const RequireAuth = ({ allowedRoles }) => {
  const isLogged = useSelector((state) => state.auth.isLogged);
  const userRole = useSelector((state) => state.auth.data.role);
  const location = useLocation();

  return isLogged && allowedRoles.find((role) => role === userRole) ? (
    <Outlet />
  ) : isLogged ? (
    <Navigate to="/unauthorized" state={{ from: location }} replace />
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
  );
};

export default RequireAuth;
