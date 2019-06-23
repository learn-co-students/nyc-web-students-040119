import React, { Component } from 'react';

export default function withAd(WrappedComponent) {
  return class MyComponent extends Component {
    state = {
      ad: {}
    }

    render() {
      return <WrappedComponent ad={this.state.ad} />
    }
  }
}
