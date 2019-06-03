import React from 'react';

class ChannelsList extends React.Component {
  render() {

    const channelLis = this.props.channels.map(function(channel) {
      return <li key={channel.name}><button>{channel.name}</button></li>
    })

    return (
      <div className="channels_list">
        <h2>Channels</h2>
        <button>+</button>
        <ul>
          {channelLis}
        </ul>
      </div>
    )
  }
}

export default ChannelsList;
