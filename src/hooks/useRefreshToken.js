import { authApi } from "../api/apiRequest";
import { useDispatch } from "react-redux";
import { accessTokenRefreshed, userLoggedOut } from "../store/authSlice";

const useRefreshToken = () => {
  const dispatch = useDispatch();

  const refresh = async () => {
    try {
      const response = await authApi.get("/refresh", {
        withCredentials: true,
      });

      dispatch(accessTokenRefreshed({ accessToken: response.data.data.token }));
      
      return response.data.data.token;
    } catch (err) {
      if (err.response) {
        console.log(
          `Response status: ${
            err.response.status
          } Response data: ${JSON.stringify(err.response.data)}`
        );
      } else {
        console.log(`Error: ${err.message}`);
      }
      dispatch(userLoggedOut({}));
    }
  };

  return refresh;
};

export default useRefreshToken;
