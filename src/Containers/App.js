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
        <Route exact path="/" component={Home} />
        <Route path="/movie/:id" component={MoviePage} />
      </Switch>
    </Router>
  );
};

export default App;
