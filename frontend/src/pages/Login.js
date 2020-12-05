import logo from "../images/logo.svg";
import tmbd from "../images/tmbd-logo.svg";
import "../styles/App.css";

function Login() {
  return (
    <div className="login-page">
      <nav className="navbar bg-primary navbar-dark">
        <a class="navbar-brand" href="/">
          Filmtracker
        </a>
      </nav>
      <main className="container text-center"></main>
      <footer className="fixed-bottom text-center">
        <small>Data provided from the good people of</small>
        <br />
        <img className="tmdb-logo" src={tmbd} alt="The Movie Database logo" />
      </footer>
    </div>
  );
}

export default Login;
