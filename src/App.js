import Main from './Display/Main';
import Make from './Display/Make';
import {Route, Switch, HashRouter as Router} from 'react-router-dom';


function App() {
  return (
    <div className="App">
      {/*
      <Router>
        <Switch>
          <Route exact path="/"><Main></Main></Route>
          <Route path="make"><Make></Make></Route>
          <Route path="/">Not Found</Route>
        </Switch>
      </Router>
      */}
      console.log("-----App working-----")
      <h2>hihi</h2>
    </div>
  );
}

export default App;
