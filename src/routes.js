import React from 'react';
import { IndexRoute, Router, Route, hashHistory } from 'react-router';
import Home from './containers/Home/Home';
import App from './containers/App/App';
import Instructors from './containers/Instructors/Instructors';
import Schedule from './containers/Schedule/Schedule';



export default (
  <Router history={hashHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={Home}/>
      </Route>
      <Route path="/instructors" component={Instructors}/>
      <Route path="/schedule" component={Schedule}/>
  </Router>
);