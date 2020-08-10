import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import './App.css';
import About from "./pages/About";

function App() {
  const user = window.localStorage.getItem("user");
  console.log("User email from storage", user);
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={About} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
