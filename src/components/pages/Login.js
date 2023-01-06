import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import axios from "../../utils/axios";

import "./Login_Register.css";
const Login = (props) => {
  const navigate = useNavigate();
  const [formValues, setFormValues] = useState({
    username: "",
    password: "",
    // emailValid: false,
    // formValid: false,
  });

  const signInBtn = (event) => {
    event.preventDefault();

    axios
      .get(`/users/${formValues.username}/${formValues.password}`)
      .then((success) => {
        console.log("success : ", success.data.data[0]);
        localStorage.setItem("access_token", success.data.access_token);
        localStorage.setItem("user", JSON.stringify(success.data.data[0]));
      })
      .catch((err) => {
        console.log("error while getting users : ", err);
      });
  };
  const handleChange = (event) => {
    setFormValues({ ...formValues, [event.target.name]: event.target.value });
  };
  return (
    <div className="login-container">
      <div className="left-side">
        <h1>Login to Your Account</h1>
        <form onSubmit={(event) => signInBtn(event)} className="login-form">
          <input
            type={"text"}
            className="username form-control"
            placeholder="email"
            name="username"
            value={formValues.username}
            onChange={(event) => handleChange(event)}
          />
          <input
            type={"password"}
            className="password form-control"
            placeholder="Password"
            name="password"
            value={formValues.password}
            onChange={(event) => handleChange(event)}
          />
          <button
            className={
              !Object.values(formValues).every((value) => value)
                ? "sign-in-btn-disable"
                : "sign-in-btn"
            }
            type="submit"
            disabled={!Object.values(formValues).every((value) => value)}
          >
            {" "}
            Sign In{" "}
          </button>
        </form>
      </div>
      <div className="right-side">
        <h1>New Here</h1>
        <p>Sign up and discover a great amount of new oppotunity.</p>
        <NavLink to="/register">
          <button
            className="sign-up-btn"
            type="button"
            onClick={() => navigate("/register")}
          >
            Sign Up
          </button>
        </NavLink>
      </div>
    </div>
  );
};

export default Login;
