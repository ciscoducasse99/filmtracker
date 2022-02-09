import React, { useState } from "react";
import {Redirect} from "react-router-dom"

const Login = ({ handleLogin, setUsername, setPassword, fakeAuth }) => {
  const [redirectToReferrer, setRedirectToReferrer] = React.useState(false);

  const login = () =>
    fakeAuth.authenticate(() => {
      setRedirectToReferrer(true);
    });

  if (redirectToReferrer === true) {
    return <Redirect to="/" />;
  }
  return (
    <div className="mb-3">
      <form onSubmit={handleLogin}>
        <label htmlFor="login-username" className="form-label">
          Username:
        </label>
        <input
          type="type"
          className="form-control rounded-pill text-left"
          id="login-username"
          placeholder="Enter username..."
          onChange={(e) => setUsername(e.target.value)}
        />
        <label htmlFor="login-password" className="form-label mt-3">
          Password:
        </label>
        <input
          type="password"
          className="form-control rounded-pill"
          id="login-password"
          placeholder="Enter password..."
          onChange={(e) => setPassword(e.target.value)}
        />
      </form>
    </div>
  );
};

export default Login;
