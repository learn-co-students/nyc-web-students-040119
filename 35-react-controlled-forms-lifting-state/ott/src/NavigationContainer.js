import React, { Component } from 'react';
import Profile from './Profile';
import ChannelsList from './ChannelsList';


class NavigationContainer extends Component {
  render() {
    return (
      <div className="navigation_container">
        <Profile user={this.props.current_user} />
        <ChannelsList
          addChannel={this.props.addChannel}
          channels={this.props.channels_list}
          selectChannel={this.props.selectChannel} />
      </div>
    )
  }
}

export default NavigationContainer;
