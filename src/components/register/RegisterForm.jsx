import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { USERNAME_REGEX } from "../../util/constants";
import { FaInfoCircle } from "react-icons/fa";
import "./registerform.css";

const RegisterForm = () => {
  // todo - complete this
  const [username, setUsername] = useState("");
  const [pwd, setPwd] = useState("");
  const [confirmPwd, setConfirmPwd] = useState("");

  const [isUsernameValid, setIsUsernameValid] = useState(false);
  const [isPwdValid, setIsPwdValid] = useState(false);
  const [isConfirmPwdValid, setIsConfirmPwdValid] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  useEffect(() => {
    const checkUsername = () => {
      setIsUsernameValid(USERNAME_REGEX.test(username));
    };

    checkUsername();
  }, [username]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Handle submit");
    // todo - let's pretend this is success.
    navigate(from, { replace: true });
  };

  return (
    <div className="loginArea">
      <h1>Register</h1>
      <form className="loginForm" onSubmit={handleSubmit}>
        <label htmlFor="username">Username</label>
        {!isUsernameValid && username && (
          <p
            style={{
              color: "aquamarine",
              backgroundColor: "black",
              margin: "3px 3px 0px 3px",
              padding: "3px",
              boxSizing: "border-box",
              borderRadius: "5px",
            }}
          >
            <FaInfoCircle />
            &nbsp;Username is not valid!
          </p>
        )}
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
        <label htmlFor="confirmPassword">Confirm Password</label>
        <input
          id="confirmPassword"
          type="password"
          value={confirmPwd}
          onChange={(e) => setConfirmPwd(e.target.value)}
        />
        <button disabled={!username || !pwd}>Register</button>
      </form>
      <Link to="/login">Already have an account?</Link>
    </div>
  );
};

export default RegisterForm;
