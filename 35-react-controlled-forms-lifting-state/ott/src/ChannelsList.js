import React from 'react';

class ChannelsList extends React.Component {
  render() {
    const channelLis = this.props.channels.map((channel) => {
      return <li
        key={channel.name}
        ><button id={channel.name}>{channel.name}</button></li>
    })

    return (
      <div className="navigation_channels_list">
        <h2>Channels</h2>
        <input type="text" placeholder="New channel name" />
        <button>+</button>
        <ul>
          {channelLis}
        </ul>
      </div>
    )
  }
}

export default ChannelsList;
