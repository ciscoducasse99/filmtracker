import React from "react";
import ReactDOM from "react-dom";
import { Route, BrowserRouter, Switch } from "react-router-dom";
import "./styles/index.css";
import Loading from "./components/Loading";

// In general, render works best with functional components,
// as they do not have lifecycle methods by default,
// and component works best with class components.

const Index = React.lazy(() => import("./pages/Index"));
const Home = React.lazy(() => import("./pages/Home"));
const Browse = React.lazy(() => import("./pages/Browse"));
const Logout = React.lazy(() => import("./pages/Logout"));
const Signup = React.lazy(() => import("./pages/Signup"));
const Film = React.lazy(() => import("./pages/Film"));

const app = (
  <React.Suspense fallback={<Loading />}>
    <React.StrictMode>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact render={() => <Index />} />
          <Route path="/signup" exact render={() => <Signup />} />
          <Route path="/home" exact render={() => <Home />} />
          <Route
            path="/browse/:section/:filmType"
            exact
            render={(props) => <Browse {...props} />}
          />
          <Route
            path="/:filmType/:filmId"
            exact
            render={(props) => <Film {...props} />}
          />
          {/* <Route
            path="/tv/:filmId"
            exact
            render={(props) => <Film {...props} />}
          /> */}
        </Switch>
      </BrowserRouter>
    </React.StrictMode>
  </React.Suspense>
);

ReactDOM.render(app, document.getElementById("root"));
