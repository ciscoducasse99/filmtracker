import React from "react";

const Signup = ({ handleSignin, setUsername, setPassword }) => {
  return (
    <div className="mb-3">
      <form onSubmit={handleSignin}>
        <label htmlFor="signup-username" className="form-label">
          New Username:
        </label>
        <input
          type="type"
          className="form-control rounded-pill"
          id="signup-username"
          placeholder="Enter username..."
          //onChange={(e) => setUsername(e.target.value)}
        />
        <label htmlFor="signup-email" className="form-label mt-3">
          New Email:
        </label>
        <input
          type="type"
          className="form-control rounded-pill"
          id="signup-email"
          placeholder="Enter email..."
          //onChange={(e) => setUsername(e.target.value)}
        />
        <label htmlFor="signup-password" className="form-label mt-3">
          New Password:
        </label>
        <input
          type="password"
          className="form-control rounded-pill"
          id="signup-password"
          placeholder="Enter password..."
          //onChange={(e) => setPassword(e.target.value)}
        />
      </form>
    </div>
  );
};

export default Signup;
