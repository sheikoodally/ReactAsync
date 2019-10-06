import React from 'react';
import './App.css';

import Home from "./components/Home.js";
import Page1 from "./components/Page1.js";
import Page2 from "./components/Page2.js";
import Page3 from "./components/Page3.js";
import Nav from "./components/Nav.js";

import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <nav>
      <Router>
          <Nav/>
          <Switch>
            <Route path="/" exact component={Home}/>
            <Route path="/page1" component={Page1}/>
            <Route path="/page2" component={Page2}/>
            <Route path="/page3" component={Page3}/>
          </Switch>
        </Router>
        </nav>
    </div>
  );
}

export default App;
