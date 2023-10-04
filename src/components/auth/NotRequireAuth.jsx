import React from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";

const NotRequireAuth = () => {
  const location = useLocation();

  const userData = {
    isLogged: false,
    data: {
      userId: 10,
      userWriterId: null,
      accessToken: "eYgdfsdkfgdfgkfghdl23489dfghs/sdfrfg443",
    },
  };

  return !userData?.isLogged ? (
    <Outlet />
  ) : (
    <Navigate to="/home" state={{ from: location }} replace />
  );
};

export default NotRequireAuth;
