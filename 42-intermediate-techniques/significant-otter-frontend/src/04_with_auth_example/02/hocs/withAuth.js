import React, { Component } from 'react';

export default function withAuth(WrappedComponent) {
  return class MyComponent extends Component {
    state = {
      currentUser: {},
      loggedIn: false
    }

    render() {
      return <WrappedComponent
        currentUser={this.state.currentUser}
        loggedIn={this.state.loggedIn} />
    }
  }
}
