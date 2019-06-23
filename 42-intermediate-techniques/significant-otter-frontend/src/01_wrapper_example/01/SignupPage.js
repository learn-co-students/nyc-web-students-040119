import React, { Component } from 'react';

import Page from './shared/Page';

class SignupPage extends Component {
  render() {
    return (
      <Page>
        <form>
          <input type="text" name="email" />
          <input type="password" name="password" />
          <input type="submit" value="Sign up!" />
        </form>
      </Page>
    );
  }

}

export default SignupPage;
