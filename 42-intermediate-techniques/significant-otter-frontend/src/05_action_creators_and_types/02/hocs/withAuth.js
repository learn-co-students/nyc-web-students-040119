import React, { Component } from 'react';
import { connect } from 'react-redux';

export default function withAuth(WrappedComponent) {
  class MyComponent extends Component {
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
      this.props.stopFetching()

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
        .then(data => this.props.logIn(data.otter))
        .catch(this.catchLoginErrors)
    }

    componentDidMount() {
      this.props.startFetching()
      this.fetchProfile()
    }

    render() {
      if (this.props.fetching && !this.props.loggedIn) {
        return <div>Logging in!</div>
      } else if (this.props.loggedIn) {
        return <WrappedComponent
          loggedIn={this.props.loggedIn}
          currentUser={this.props.currentUser} />
      } else {
        return <div>Please log in!</div>
      }
    }
  }

  const mapStateToProps = (state) => {
    return {
      loggedIn: state.auth.loggedIn,
      fetching: state.auth.fetching,
      currentUser: state.auth.currentUser
    }
  }

  const mapDispatchToProps = (dispatch) => {
    return {
      startFetching: () => dispatch({ type: "START_FETCHING" }),
      stopFetching: () => dispatch({ type: "STOP_FETCHING" }),
      logIn: (currentUser) => dispatch({ type: "LOG_IN", currentUser })
    }
  }

  return connect(mapStateToProps, mapDispatchToProps)(MyComponent)
}
