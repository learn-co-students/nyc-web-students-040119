import React, { Component } from 'react';

export default function withAd(WrappedComponent) {
  return class MyComponent extends Component {
    render() {
      return <WrappedComponent />
    }
  }
}
