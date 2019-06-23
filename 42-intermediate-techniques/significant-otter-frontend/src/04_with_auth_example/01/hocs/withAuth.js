import React, { Component } from 'react';

export default function withAuth(WrappedComponent) {
  return class MyComponent extends Component {
    render() {
      return <WrappedComponent />
    }
  }
}
