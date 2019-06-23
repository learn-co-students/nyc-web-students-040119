import React, { Component } from 'react';

export default function withAd(WrappedComponent) {
  return class MyComponent extends Component {
    state = {
      ad: {}
    }

    componentDidMount() {
      const randomInterval = (Math.random() * 1000) + 5000
      
      this.adIntervalId = setInterval(() => {
        let randomAdId = Math.floor(Math.random() * 500);
        
        fetch(`https://jsonplaceholder.typicode.com/photos/${randomAdId}`)
          .then(response => response.json())
          .then( ad => this.setState({ ad }) )
      }, randomInterval)
    }

    componentWillUnmount() {
      clearInterval(this.adIntervalId)
    }

    render() {
      return <WrappedComponent ad={this.state.ad} />
    }
  }
}
