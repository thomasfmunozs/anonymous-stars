import React, { Component } from 'react';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';

import { UserProvider } from '../userContext';

import Login from '../login';
import Home from '../home';
import GiveStar from '../give-star';

class Main extends Component {
  render() {
    return (
      <UserProvider>
        <Router>
          <Switch>
            <Route exact path="/" component={Login} />
            <Route path="/index" component={Home} />
            <Route path="/give-star" component={GiveStar} />
          </Switch>
        </Router>
      </UserProvider>
    )
  }
}

export default Main;