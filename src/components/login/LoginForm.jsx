import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { userLogged } from "../../store/authSlice";
import { authApi as api } from "../../api/apiRequest";
import FormPrompt from "../register/FormPrompt";
import { notificationSent } from "../../store/notificationSlice";
import { USER_LOGIN_SUCCESS } from "../../util/notifyMessages";
import { notifyType } from "../notification/Notification";

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [pwd, setPwd] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/"; // Navigate user back to wherever he/she was.

  const dispatch = useDispatch();

  useEffect(() => {
    setErrorMessage("");
  }, [username, pwd]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await api.post(
        "/authenticate",
        {
          email: username,
          password: pwd,
        },
        {
          withCredentials: true,
        }
      );
      dispatch(
        userLogged({
          accessToken: response.data.data.token,
          userWriterId: response.data.data.writerId,
        })
      );
      navigate(from, { replace: true });
      dispatch(
        notificationSent({
          message: USER_LOGIN_SUCCESS,
          type: notifyType.INFO,
        })
      );
    } catch (err) {
      let errorMsg;
      if (err.response) {
        console.log(
          `Response status: ${
            err.response.status
          } Response data: ${JSON.stringify(err.response.data)}`
        );
        errorMsg =
          err.response.status === 401
            ? "Username and password does not match"
            : err.response?.data.description;
      } else {
        console.log(`Error: ${err.message}`);
        errorMsg = err.message;
      }
      setErrorMessage(errorMsg);
    }
  };

  return (
    <div className="loginArea">
      <h1>Login to Proceed</h1>
      <form className="loginForm" onSubmit={handleSubmit}>
        <label htmlFor="username">Username</label>
        <input
          autoFocus
          id="username"
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <label htmlFor="password">Password</label>
        <input
          id="password"
          type="password"
          value={pwd}
          onChange={(e) => setPwd(e.target.value)}
        />
        {errorMessage && <FormPrompt message={`Failure - ${errorMessage}`} />}
        <button disabled={!username || !pwd}>Login</button>
      </form>
      <Link to="/register">Register</Link>
    </div>
  );
};

export default LoginForm;
