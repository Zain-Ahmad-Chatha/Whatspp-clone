import React, { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";

import axios from "../../utils/axios";
import "./Login_Register.css";
const Register = () => {
  const navigate = useNavigate();

  const [valid, setValid] = useState(true);
  const [formValues, setFormValues] = useState({
    firstName: "",
    lastName: "",
    username: "",
    password: "",
    pictureLink: "",
    // emailValid: false,
    // formValid: false,
  });

  const signUpBtn = (event) => {
    event.preventDefault();
    axios
      .post("/users", { formValues })
      .then((success) => {
        console.log("posted", success);
        setFormValues({
          firstName: "",
          lastName: "",
          username: "",
          password: "",
          pictureLink: "",
        });
        navigate("/login");
      })
      .catch((err) => {
        console.log("error : ", err);
      });
  };

  const handleChange = (event) => {
    setFormValues({ ...formValues, [event.target.name]: event.target.value });
  };
  return (
    <div className="login-container">
      <div className="left-side">
        <h1>Register to Your Account</h1>
        <form onSubmit={(event) => signUpBtn(event)} className="login-form">
          <input
            type={"text"}
            className="firstName form-control"
            placeholder="First Name"
            name="firstName"
            value={formValues.firstName}
            onChange={(event) => handleChange(event)}
          />
          <input
            type={"text"}
            className="lastName form-control"
            placeholder="Last Name"
            name="lastName"
            value={formValues.lastName}
            onChange={(event) => handleChange(event)}
          />
          <input
            type={"text"}
            className="username form-control"
            placeholder="Email"
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
          <input
            type={"text"}
            className="pictureLink form-control"
            placeholder="Picture Link"
            name="pictureLink"
            value={formValues.pictureLink}
            onChange={(event) => handleChange(event)}
          />
          <button
            className="sign-in-btn"
            type="submit"
            disabled={!Object.values(formValues).every((value) => value)}
          >
            Sign Up
          </button>
        </form>
      </div>
      <div className="right-side">
        <h1>Login to your Account</h1>
        <p>Sign in and discover a great amount of new oppotunity.</p>
        <NavLink to={"/login"}>
          <button
            className="sign-up-btn"
            type="button"
            onClick={() => navigate("/login")}
          >
            Sign In
          </button>
        </NavLink>
      </div>
    </div>
  );
};

export default Register;
