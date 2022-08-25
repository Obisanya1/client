import React from "react";
import { useState, useEffect } from "react";
import { Logo, Formrow, Alert } from "./../components";
import Wrapper from "./../assets/wrappers/RegisterPage";
import { useAppContext } from "../context/appContext";

const intialState = {
  name: "",
  email: "",
  password: "",
  isMember: true,
};

const Register = () => {
  const [values, setValues] = useState(intialState);

  const { isLoading, showAlert, displayAlert } = useAppContext();

  const toggleMember = () => {
    setValues({ ...values, isMember: !values.isMember });
  };

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(e.target);
    const { name, email, password, isMember } = values;
    if (!email || !password || (!isMember && !name)) {
      displayAlert();
      return;
    }
    console.log(values);
  };

  return (
    <Wrapper className="full-page">
      <form className="form" onSubmit={onSubmit}>
        <Logo />
        <h3>{values.isMember ? "Login" : "Register"}</h3>
        {showAlert && <Alert />}

        {!values.isMember && (
          <Formrow
            type="text"
            name="name"
            handleChange={handleChange}
            value={values.name}
          />
        )}

        <Formrow
          type="email"
          name="email"
          handleChange={handleChange}
          value={values.email}
        />
        <Formrow
          type="password"
          name="password"
          handleChange={handleChange}
          value={values.password}
        />
        <button className="btn btn-block">Submit</button>
        <p>
          {values.isMember ? "Not a member yet?" : "Already a member"}
          <button type="button" onClick={toggleMember} className="member-btn">
            {values.isMember ? "Register" : "Login"}
          </button>
        </p>
      </form>
    </Wrapper>
  );
};

export default Register;
