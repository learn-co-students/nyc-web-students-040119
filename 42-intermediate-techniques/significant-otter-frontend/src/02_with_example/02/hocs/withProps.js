import React, { Component } from 'react';

export default function withProps(WrappedComponent) {
  console.log(WrappedComponent);
  
  return class MyComponent extends Component {
    render() {
      return <h1>"hola!"</h1>
    }
  }
}
