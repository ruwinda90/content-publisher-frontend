import React, { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState("");
  const [pwd, setPwd] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Handle submit");
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
          <button disabled={!username || !pwd}>Submit</button>
        </form>
        <Link to="/register">Register</Link>
      </div>
    </main>
  );
};

export default Login;
