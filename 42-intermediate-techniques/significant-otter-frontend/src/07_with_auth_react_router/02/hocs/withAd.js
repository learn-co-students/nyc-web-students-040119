import React, { Component } from 'react';

export default function withAd(WrappedComponent) {
  return class MyComponent extends Component {
    state = {
      loadedAd: false,
      ad: {}
    }

    componentDidMount() {
      const randomInterval = (Math.random() * 9000) + 1000

      this.adIntervalId = setInterval(() => {
        let randomAdId = Math.floor(Math.random() * 500);

        fetch(`https://jsonplaceholder.typicode.com/photos/${randomAdId}`)
          .then(response => response.json())
          .then( ad => this.setState({
            loadedAd: true,
            ad
          }) )
      }, randomInterval)
    }

    componentWillUnmount() {
      clearInterval(this.adIntervalId)
    }

    render() {
      if (this.state.loadedAd) {
        return <WrappedComponent ad={this.state.ad} />
      } else {
        return <WrappedComponent ad={{thumbnailUrl: "https://media.tenor.com/images/556e9ff845b7dd0c62dcdbbb00babb4b/tenor.gif"}} />
      }
    }
  }
}
