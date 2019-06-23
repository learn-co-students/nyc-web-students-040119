import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as authActionCreators from '../actionCreators/auth';

export default function withAuth(WrappedComponent) {
  class MyComponent extends Component {
    componentDidMount() {
      this.props.logInAsync()
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

  return connect(mapStateToProps, authActionCreators)(MyComponent)
}
