import React, { Component } from 'react';

export default function withAuth(WrappedComponent) {
  return class MyComponent extends Component {
    state = {
      fetching: false,
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
        // you could display this message?
      }
    }

    stopFetching = (response) => {
      this.setState({ fetching: false })

      return response
    }

    fetchProfile = () => {
      return fetch("http://localhost:3000/api/v1/profile", {
        headers: {
          "Authorization": `Bearer ${localStorage.token}`
        }
      }).then(this.stopFetching)
        .then(this.checkResponseStatus)
        .then(resp => resp.json())
        .then(data => {
          this.setState({
            currentUser: data.otter,
            loggedIn: true
          })
        })
        .catch(this.catchLoginErrors)
    }

    componentDidMount() {
      this.setState({ fetching: true }, this.fetchProfile)
    }

    render() {
      if (this.state.fetching && !this.state.loggedIn) {
        return <div>Logging in!</div>
      } else if (this.state.loggedIn) {
        return <WrappedComponent
          loggedIn={this.state.loggedIn}
          currentUser={this.state.currentUser} />
      } else {
        return <div>Please log in!</div>
      }
    }
  }
}
