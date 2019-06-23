import React, { Component, Fragment } from 'react';

class SignupPage extends Component {
  render() {
    return (
      <Fragment>
        <header>
          <h1>Wrapper Example: Sign up</h1>
          <nav>
            <ul>
              <li>Link</li>
              <li>Link</li>
              <li>Link</li>
            </ul>
          </nav>
        </header>
        <form>
          <input type="text" name="email" />
          <input type="password" name="password" />
          <input type="submit" value="Sign up!" />
        </form>
      </Fragment>
    );
  }

}

export default SignupPage;
