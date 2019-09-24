import React from 'react';
import { Route, Switch } from "react-router-dom";
import Home from './Sections/Home/index';
import About from './Sections/About/index';
import Entrar from './Sections/Login/index';
import './App.css';

export default function App() {

  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/sobre" component={About} />
      <Route path="/entrar" component={Entrar} />
    </Switch>
  );
}