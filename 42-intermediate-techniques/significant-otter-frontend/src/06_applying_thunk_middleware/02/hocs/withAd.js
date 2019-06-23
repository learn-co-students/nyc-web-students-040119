import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as adActionCreators from '../actionCreators/ad';

export default function withAd(WrappedComponent) {

  // NOTE: This is hacky, don't use.
  // We're using this to keep each ad unique for the moment!
  const name = WrappedComponent.name

  class MyComponent extends Component {
    componentDidMount() {
      const randomInterval = (Math.random() * 9000) + 1000

      this.adIntervalId = setInterval(() => {
        let randomAdId = Math.floor(Math.random() * 500);

        this.props.startFetching(name)
        fetch(`https://jsonplaceholder.typicode.com/photos/${randomAdId}`)
          .then(response => response.json())
          .then( ad => this.props.loadAd(ad, name))
      }, randomInterval)
    }

    componentWillUnmount() {
      clearInterval(this.adIntervalId)
    }

    render() {
      const loadingAd = {
        thumbnailUrl: "https://media.tenor.com/images/556e9ff845b7dd0c62dcdbbb00babb4b/tenor.gif"
      }

      return <WrappedComponent
        {...this.props}
        ad={this.props.ad || loadingAd}
        fetchingAd={this.props.fetching} />
    }
  }

  const mapStateToProps = (state) => {
    return {
      ad: state.ads.items[name],
      fetching: state.ads.fetching[name]
    }
  }

  return connect(mapStateToProps, adActionCreators)(MyComponent)
}
