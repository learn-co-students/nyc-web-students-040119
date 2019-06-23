import React, { Component } from 'react';

import Page from './shared/Page';
import UserForm from './shared/UserForm';

class SignupPage extends Component {
  render() {
    return (
      <Page>
        <UserForm submitValue="Sign up!" />
      </Page>
    );
  }

}

export default SignupPage;
