import React from 'react';
import { hot } from 'react-hot-loader';
import Main from './Display/Main';
import Make from './Display/Make';
import {Route, Switch, HashRouter as Router} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      {
      <Router>
        <Switch>
          <Route exact path="/"><Main></Main></Route>
          <Route path="/make"><Make></Make></Route>
        </Switch>
      </Router>
      }
    </div>
  );
}

export default hot(module)(App);
