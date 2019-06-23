import React, { Component, Fragment } from 'react';

import LoginPage from './LoginPage';
import SignupPage from './SignupPage';
import ProfilePage from './ProfilePage';

import withProps from './hocs/withProps';

class App extends Component {

  render() {
    return (
      <Fragment>
        <time style={{ color: this.props.color }}>
          {this.props.time}
        </time>
        <LoginPage />
        <SignupPage />
        <ProfilePage />
      </Fragment>
    );
  }

}

export default withProps(App);
