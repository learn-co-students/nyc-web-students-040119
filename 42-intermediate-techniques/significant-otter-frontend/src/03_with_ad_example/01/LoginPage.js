import React, { Component } from 'react';

import Page from './shared/Page';
import UserForm from './shared/UserForm';

import withAd from './hocs/withAd';

class LoginPage extends Component {

  render() {
    return (
      <Page>
        <UserForm submitValue="Log in!" />
      </Page>
    );
  }

}

export default withAd(LoginPage);
