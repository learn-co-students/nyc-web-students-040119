import React, { Component } from 'react';

import Page from './shared/Page';
import UserForm from './shared/UserForm';

class LoginPage extends Component {

  render() {
    return (
      <Page>
        <UserForm submitValue="Log in!" />
      </Page>
    );
  }

}

export default LoginPage;
