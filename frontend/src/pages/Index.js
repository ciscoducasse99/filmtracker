import { useState } from "react";
import { Link } from "react-router-dom";

import Login from "../components/Login/Login";
import tmdb from "../images/tmdb.svg";
import "../styles/App.css";

const Index = () => {
  const [username, setUsername] = useState(null);
  const [password, setPassword] = useState(null);
  const [loginError, setLoginError] = useState(" ");

  const handleLogin = (e) => {
    e.preventDefault();

    if (!username || !password) {
      setLoginError("Please correctly fill out form");
      return 0;
    }
    const loginInfo = {
      username,
      password,
    };

    console.log(loginInfo);
  };

  return (
    <div className="login-page">
      <main className="container">
        <h1 className="gradient-text text-center mt-5">Filmtracker</h1>
        <div className="col-sm-7 col-md-5 p-4 mt-5 login-card border rounded mx-auto shadow-sm bg-light">
          <div className="tab-content">
            <div
              className="tab-pane fade show active"
              id="home"
              role="tabpanel"
            >
              <Login
                handleLogin={handleLogin}
                setUsername={setUsername}
                setPassword={setPassword}
              />
            </div>
          </div>

          <small className="text-error small-text text-center">
            {loginError}
          </small>
          <div className="mt-3 text-center">
            <button
              className="my-2 rounded-pill btn btn-outline-primary px-5"
              onClick={(e) => handleLogin(e)}
            >
              {" "}
              Login{" "}
            </button>
            <br />
            <p className="mt-5">
              Need an account?{" "}
              <Link
                to="/signup"
                className="text-primary small-text text-center"
              >
                <span className="text-primary">Register for one.</span>
              </Link>
            </p>

            <Link to="/home">
              <small className="mt-5 small-text text-info text-center">
                Continue as Guest
              </small>
            </Link>
          </div>
        </div>
      </main>
      <footer className="fixed-bottom text-center">
        <small>API services served by the team from</small>
        <br />
        <img className="tmdb-logo" src={tmdb} alt="The Movie Database logo" />
      </footer>
    </div>
  );
};

export default Index;
