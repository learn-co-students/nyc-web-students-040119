import React, { Component, Fragment } from 'react';

class LoginPage extends Component {

  render() {
    return (
      <Fragment>
        <header>
          <h1>Wrapper Example: Log in</h1>
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
          <input type="submit" value="Log in!" />
        </form>
      </Fragment>
    );
  }

}

export default LoginPage;
