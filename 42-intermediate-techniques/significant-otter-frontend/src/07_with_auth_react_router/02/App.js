import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import LoginPage from './LoginPage';
import SignupPage from './SignupPage';
import ProfilePage from './ProfilePage';

import withProps from './hocs/withProps';

class App extends Component {

  render() {
    return (
      <BrowserRouter>
          <time style={{ color: this.props.color }}>
            {this.props.time}
          </time>
          <Switch>
            <Route exact path="/login" component={LoginPage} />
            <Route exact path="/signup" component={SignupPage} />
            <Route component={ProfilePage} />
          </Switch>
      </BrowserRouter>
    );
  }

}

export default withProps(App);
