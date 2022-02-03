import React, { useRef } from "react";
import { useUserContext } from "../../context/userContext";
import "./Login.css";

const Signin = () => {
  const emailRef = useRef();
  const psdRef = useRef();
  const { signInUser } = useUserContext();

  const onSubmit = (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    const password = psdRef.current.value;
    if (email && password) signInUser(email, password);
  };

  return (
    <div className="form">
      <h1> Hockey Data Analysis App </h1>
      <form onSubmit={onSubmit}>
        <input placeholder="Email" type="email" ref={emailRef} />
        <input placeholder="Password" type="password" ref={psdRef} />
        <button id="button" type="submit">
          Login
        </button>
      </form>
    </div>
  );
};

export default Signin;
