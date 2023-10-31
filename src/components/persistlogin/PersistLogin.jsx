import React, { useEffect, useState } from "react";
import useRefreshToken from "../../hooks/useRefreshToken";
import { Outlet } from "react-router-dom";

const PersistLogin = () => {
  const [isLoading, setIsLoading] = useState(true);
  const refresh = useRefreshToken();

  useEffect(() => {
    const verifyRefreshToken = async () => {
      await refresh();
      setIsLoading(false);
    };

    verifyRefreshToken();
  }, []);

  return <>{!isLoading && <Outlet />}</>;
};

export default PersistLogin;
