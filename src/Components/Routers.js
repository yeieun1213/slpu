import React from 'react';
import { hot } from 'react-hot-loader';
import Main from '../Display/00_Main';
import Start from '../Display/01_Start';
import Login from '../Display/02_Login';
import Make from '../Display/03_Make';
import Preview from '../Display/04_Preview';

import {Route, Switch, HashRouter as Router} from 'react-router-dom';

const Routers = () =>(
    <div className="App">
      {
      <Router>
        <Switch>
          <Route exact path="/"><Main></Main></Route>
          <Route path="/main"><Main></Main></Route>
          <Route path="/start"><Start></Start></Route>
          <Route path="/login"><Login></Login></Route>
          <Route path="/make"><Make></Make></Route>
          
        </Switch>
      </Router>
      }
    </div>
);

export default Routers;
