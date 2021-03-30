import React from "react";
import NavBar from "../Components/Header/Header";
import Home from "../Pages/HomePage/HomePage";
import MoviePage from "../Pages/MovieDetails/MovieDetails";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route
          exact
          path={`${process.env.PUBLIC_URL + "/"}`}
          component={Home}
        />
        <Route
          path={`${process.env.PUBLIC_URL + "/movie/:id"}`}
          component={MoviePage}
        />
      </Switch>
      <div className="footer">
        @Vimal Thanikachalam 2021 |
        <a href="https://github.com/vimaleurakaa">Github</a>
      </div>
    </Router>
  );
};

export default App;
