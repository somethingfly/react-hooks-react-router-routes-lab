import React from "react";
import { Route, Switch } from "react-router-dom";
import NavBar from "./NavBar";
import Home from "./Home";
import Actors from "./Actors";
import Directors from "./Directors";
import Movies from "./Movies";

// Component Home says "code here" between div tags
// the div is not needed because Home has a single tag <h1>
// Likewise NavBar does not need a div because single tag <ul>
// Leaving div per instruction
// Test requires a class on NavBar, but mock images show no styling
// Simply added a className="navbar", but could have used Style

function App() {
  return (
    <div>
      <NavBar />
      <Switch>
        <Route path="/movies">
          <Movies />
        </Route>
        <Route path="/directors">
          <Directors />
        </Route>
        <Route path="/actors">
          <Actors />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch> 
    </div>
  );
}

export default App;

/*
import React from "react";
import { Route, Switch } from "react-router-dom";
import NavBar from "./NavBar";
import Home from "./Home";
import Actors from "./Actors";
import Directors from "./Directors";
import Movies from "./Movies";

function App() {
  return <div>{**{code here}**}</div>;
}

export default App;
*/