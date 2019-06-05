import React from 'react';

class ChannelsList extends React.Component {
  state = {
    channel: ""
  }

  handleChange = (event) => {
    this.setState({
      channel: event.target.value
    })
  }

  handleClick = (event) => {
    this.props.addChannel(this.state.channel)
  }

  handleChannelClick = (event) => {
    this.props.selectChannel(event.target.id)
  }

  render() {
    const channelLis = this.props.channels.map((channel) => {
      return <li
        key={channel.name}
        ><button
          onClick={this.handleChannelClick}
          id={channel.name}>{channel.name}</button></li>
    })

    return (
      <div className="navigation_channels_list">
        <h2>Channels</h2>
        <input
          type="text"
          onChange={this.handleChange}
          placeholder="New channel name" />
        <button
          onClick={this.handleClick}
        >+</button>
        <ul>
          {channelLis}
        </ul>
      </div>
    )
  }
}

export default ChannelsList;
