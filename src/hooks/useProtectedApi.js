import React, { useEffect } from "react";
import { protectedApi } from "../api/apiRequest";
import useRefreshToken from "./useRefreshToken";
import { useSelector } from "react-redux";

const useProtectedApi = () => {
  const refresh = useRefreshToken();
  const accessToken = useSelector((state) => state.auth.data.accessToken);

  useEffect(() => {
    const requestIntercept = protectedApi.interceptors.request.use(
      (config) => {
        if (config.headers["Authorization"]) {
          config.headers["Authorization"] = `Bearer ${accessToken}`;
        }
        return config;
      },
      (error) => Promise.reject(error)
    );

    const responseIntercept = protectedApi.interceptors.response.use(
      (response) => response,
      async (error) => {
        const prevRequest = error?.config;

        if (error?.response?.status === 403 && !prevRequest?.sent) { // todo - change
          prevRequest.sent = true;

          const newAccessToken = await refresh();
          prevRequest.headers["Authorization"] = `Bearer ${newAccessToken}`;
          return protectedApi(prevRequest);
        }
        return Promise.reject(error);
      }
    );

    return () => {
      protectedApi.interceptors.request.eject(requestIntercept);
      protectedApi.interceptors.response.eject(responseIntercept);
    };
  }, [accessToken, refresh]);

  return protectedApi;
};

export default useProtectedApi;
