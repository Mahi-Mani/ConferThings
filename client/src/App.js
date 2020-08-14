import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import './App.css';
import About from "./pages/About";
import Home from "./pages/Home";
import NotAuthenticated from "./pages/NotAuthenticated";

function App() {
  const user = window.localStorage.getItem("user");
  console.log("User email from storage", user);
  return (
    <>
      {!user ?
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={About} />
          <Route exact path="/home" component={NotAuthenticated} />
        </Switch>
        </BrowserRouter>
        :
        <BrowserRouter>
        <Switch>
          <Route exact path="/" component={About} />
          <Route exact path="/home" component={Home} />
        </Switch>
        </BrowserRouter>
      }
    </>
  );
}

export default App;
