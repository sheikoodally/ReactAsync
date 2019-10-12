import React from 'react';
import './App.css';

import Home from "./components/Home.js";
import Astronauts from "./components/Astronauts";
import Nav from "./components/Nav";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <nav>
      <Router>
          <Nav/>
          <Switch>
            <Route path="/" exact component={Home}/>
            <Route path="/astronauts" component={Astronauts}/>
          </Switch>
        </Router>
        </nav>
    </div>
  );
}

export default App;
