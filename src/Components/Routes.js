import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Main from 'Display/Main';
import Make from 'Display/Make';

class Routes extends Component {
    render() {
        return (
            <Router>
                
                <Route exact path="/" component={Main}></Route>
                <Route path="/Make" component={Make}></Route>
            </Router>
        )
    }
}

export default Routes;