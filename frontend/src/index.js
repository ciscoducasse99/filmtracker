import React from "react";
import ReactDOM from "react-dom";
import { Route, BrowserRouter, Switch } from "react-router-dom";
import "./styles/index.css";

// In general, render works best with functional components,
// as they do not have lifecycle methods by default,
// and component works best with class components.

const Login = React.lazy(() => import("./pages/Login"));
const Home = React.lazy(() => import("./pages/Home"));
const Logout = React.lazy(() => import("./pages/Logout"));

const app = (
  <React.Suspense fallback={<div>loading...</div>}>
    <React.StrictMode>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact render={() => <Login />} />
        </Switch>
      </BrowserRouter>
    </React.StrictMode>
  </React.Suspense>
);

ReactDOM.render(app, document.getElementById("root"));
