import React from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";

const RequireAuth = () => {
  const location = useLocation();

  const userData = {
    isLogged: true,
    data: {
      userId: 10,
      userWriterId: null,
      accessToken: "eYgdfsdkfgdfgkfghdl23489dfghs/sdfrfg443",
    },
  };

  return userData.isLogged ? (
    <Outlet />
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
  );
};

export default RequireAuth;
