import React, { Component } from 'react';

import Page from './shared/Page';

class LoginPage extends Component {

  render() {
    return (
      <Page>
        <form>
          <input type="text" name="email" />
          <input type="password" name="password" />
          <input type="submit" value="Log in!" />
        </form>
      </Page>
    );
  }

}

export default LoginPage;
