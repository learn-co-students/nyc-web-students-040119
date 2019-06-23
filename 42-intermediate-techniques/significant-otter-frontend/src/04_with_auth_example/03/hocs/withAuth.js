import React, { Component } from 'react';

export default function withAuth(WrappedComponent) {
  return class MyComponent extends Component {
    state = {
      currentUser: {},
      loggedIn: false
    }

    componentDidMount() {
      fetch("http://localhost:3000/api/v1/profile", {
        headers: {
          "Authorization": `Bearer ${localStorage.token}`
        }
      }).then(resp => resp.json())
        .then(data => {
          this.setState({
            currentUser: data.otter,
            loggedIn: true
          })
        })
    }

    render() {
      return <WrappedComponent
        currentUser={this.state.currentUser}
        loggedIn={this.state.loggedIn} />
    }
  }
}
