import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import './App.css';
import About from "./pages/About";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={About} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
