import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { userLogged } from "../store/authSlice";

const Login = () => {
  const [username, setUsername] = useState("");
  const [pwd, setPwd] = useState("");

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Handle submit");
    // todo - let's pretend this is success.
    dispatch(userLogged({}))
    navigate(from, { replace: true });
  };

  return (
    <main className="login">
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
          <button disabled={!username || !pwd}>Login</button>
        </form>
        <Link to="/register">Register</Link>
      </div>
    </main>
  );
};

export default Login;
