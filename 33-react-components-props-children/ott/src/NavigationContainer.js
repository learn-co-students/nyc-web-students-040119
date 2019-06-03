import React, { Component } from 'react';
import Profile from './Profile';
import ChannelsList from './ChannelsList';


class NavigationContainer extends Component {
  render() {
    console.log('NavigationContainer user', this.props.user);
    return (
      <div>
        <Profile user={this.props.user} />
        <ChannelsList />
      </div>
    )
  }
}

export default NavigationContainer;
