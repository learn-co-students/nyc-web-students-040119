import React, { Component } from 'react';

export default function withAuth(WrappedComponent) {
  return class MyComponent extends Component {
    state = {
      currentUser: {},
      loggedIn: false
    }

    checkResponseStatus = (response) => {
      if (response.status === 401) {
        throw new Error("Unauthorized")
      }

      return response
    }

    catchLoginErrors = (e) => {
      if (e.message === "Unauthorized") {

      }
    }

    componentDidMount() {
      fetch("http://localhost:3000/api/v1/profile", {
        headers: {
          "Authorization": `Bearer ${localStorage.token}`
        }
      }).then(this.checkResponseStatus)
        .then(resp => resp.json())
        .then(data => {
          this.setState({
            currentUser: data.otter,
            loggedIn: true
          })
        })
        .catch(this.catchLoginErrors)
    }

    render() {
      return <WrappedComponent
        currentUser={this.state.currentUser}
        loggedIn={this.state.loggedIn} />
    }
  }
}
