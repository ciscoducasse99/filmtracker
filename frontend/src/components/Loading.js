import logo from "../images/logo.svg";
import Div100vh from "react-div-100vh";
import "../styles/App.css";

const Loading = ({ hideNav }) => {
  return (
    <Div100vh>
      <nav className={hideNav ? "d-none" : "navbar border-bottom py-1"}>
        <div className="container-fluid">
          <a
            className="gradient-text navbar-brand"
            style={{ letterSpacing: "2px" }}
            href="/home"
          >
            Filmtracker
          </a>
        </div>
      </nav>
      <div className="container mt-5 text-center">
        <img className="react-logo" src={logo} alt="loading" />
      </div>
    </Div100vh>
  );
};

export default Loading;
