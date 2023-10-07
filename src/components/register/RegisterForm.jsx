import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { PWD_REGEX, USERNAME_REGEX } from "../../util/constants";
import "./registerform.css";
import FormPrompt from "./FormPrompt";
import { authApi as api } from "../../api/apiRequest";

const RegisterForm = () => {
  const [username, setUsername] = useState("");
  const [pwd, setPwd] = useState("");
  const [confirmPwd, setConfirmPwd] = useState("");

  const [isUsernameValid, setIsUsernameValid] = useState(false);
  const [isPwdValid, setIsPwdValid] = useState(false);
  const [isConfirmPwdValid, setIsConfirmPwdValid] = useState(false);

  const [errorMessage, setErrorMessage] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    const checkUsername = () => {
      setIsUsernameValid(USERNAME_REGEX.test(username));
      setErrorMessage("");
    };

    checkUsername();
  }, [username]);

  useEffect(() => {
    const checkPwdValues = () => {
      setIsPwdValid(PWD_REGEX.test(pwd));
      setIsConfirmPwdValid(pwd === confirmPwd);
      setErrorMessage("");
    };

    checkPwdValues();
  }, [pwd, confirmPwd]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await api.post("/register", {
        email: username,
        password: pwd,
      });
      navigate("/"); // TODO - show login success message, when it is successful.
    } catch (err) {
      let errorMsg;
      if (err.response) {
        console.log(
          `Response status: ${
            err.response.status
          } Response data: ${JSON.stringify(err.response.data)}`
        );
        errorMsg = err.response.data.description;
      } else {
        console.log(`Error: ${err.message}`);
       errorMsg = err.message;
      }
      setErrorMessage(errorMsg);
    }
  };

  return (
    <div className="loginArea">
      <h1>Register</h1>
      <form className="loginForm" onSubmit={handleSubmit}>
        <label htmlFor="username">Username</label>
        {!isUsernameValid && username && (
          <FormPrompt
            message={
              "Username is not valid! Should contain 4-24 characters. Should not start with a number."
            }
          />
        )}
        <input
          autoFocus
          id="username"
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <label htmlFor="password">Password</label>
        {!isPwdValid && pwd && (
          <FormPrompt
            message={
              "Password is not valid! Should contain 8-24 characters, at least one lowercase, one uppercase and one special character."
            }
          />
        )}
        <input
          id="password"
          type="password"
          value={pwd}
          onChange={(e) => setPwd(e.target.value)}
        />
        <label htmlFor="confirmPassword">Confirm Password</label>
        {!isConfirmPwdValid && confirmPwd && (
          <FormPrompt message={"Does not match with password field."} />
        )}
        <input
          id="confirmPassword"
          type="password"
          value={confirmPwd}
          onChange={(e) => setConfirmPwd(e.target.value)}
        />
        {errorMessage && <FormPrompt message={`Failure - ${errorMessage}`} />}
        <button
          disabled={!isUsernameValid || !isPwdValid || !isConfirmPwdValid}
        >
          Register
        </button>
      </form>
      <Link to="/login">Already have an account?</Link>
    </div>
  );
};

export default RegisterForm;
