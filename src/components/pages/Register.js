import React, { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import ToasterNotify from "../../utils/Toaster";
import { Button, Position, Toast, Toaster, Intent } from "@blueprintjs/core";

import axios from "../../utils/axios";
import "./Login_Register.css";
const Register = () => {
  const navigate = useNavigate();

  const [valid, setValid] = useState({ success: false, error: false });
  const [formValues, setFormValues] = useState({
    firstName: "",
    lastName: "",
    username: "",
    password: "",
    picture: "",
    // emailValid: false,
    // formValid: false,
  });

  const signUpBtn = (event) => {
    console.log("wwwww");
    event.preventDefault();
    // setValid(true);
    axios
      .post("/users", { formValues })
      .then((success) => {
        console.log("posted", success);
        setValid({ ...valid, success: true });
        setFormValues({
          firstName: "",
          lastName: "",
          username: "",
          password: "",
          picture: "",
        });
        navigate("/login");
      })
      .catch((err) => {
        console.log("error while creating user : ", err);
        setValid({ ...valid, error: true });
      });
  };
  const handleChange = (event) => {
    setFormValues({ ...formValues, [event.target.name]: event.target.value });
  };
  return (
    <div className="login-container">
      {valid.success && (
        <Toaster position={Position.TOP_RIGHT}>
          <Toast
            timeout={2000}
            message={"User Register Successfully."}
            intent={Intent.SUCCESS}
            onDismiss={() => setValid({ ...valid, success: false })}
          />
        </Toaster>
      )}
      {valid.error && (
        <Toaster position={Position.TOP_RIGHT}>
          <Toast
            timeout={2000}
            message={"Reguired Fields Must Be Filled."}
            intent={Intent.DANGER}
            onDismiss={() => setValid({ ...valid, error: false })}
          />
        </Toaster>
      )}
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
            className="picture form-control"
            placeholder="Picture Link"
            name="picture"
            value={formValues.picture}
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
