import React, { Component, Fragment } from 'react';

class Page extends Component {

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
        {this.props.children}
      </Fragment>
    );
  }

}

export default Page;
