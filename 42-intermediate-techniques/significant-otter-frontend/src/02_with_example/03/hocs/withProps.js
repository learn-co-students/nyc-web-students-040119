import React, { Component } from 'react';

export default function withProps(WrappedComponent) {
  return class MyComponent extends Component {
    render() {
      return <WrappedComponent />
    }
  }
}
