import React from 'react';

class ChannelsList extends React.Component {
  // Method 1 for setting initial state
  // instance variable equivalent in Ruby
  // state = {
  //   channel: "",
  //   channels: []
  // }

  // Method 2 for setting initial state
  // YOU NEED TO USE THIS METHOD IF YOU ARE INITIALIZING STATE WITH DATA FROM PROPS
  constructor(props) {
    super(props)
    this.state = {
      channel: "",
      // if you derive pass by reference objects from props, make a copy
      channels: [...props.channels]
    }
  }

  handleChange = (event) => {
    this.setState({
      channel: event.target.value
    })
  }

  handleClick = (event) => {
    // how do we add that channel to the list of channels?
    const channelObj = {
      name: `#${this.state.channel}`,
      messages: []
    }

    this.setState({
      channels: [...this.state.channels, channelObj]
    })
  }

  // handleChannelChange = (event) => {
  //   console.log(event.target.id);
  // }

  render() {
    const channelLis = this.state.channels.map((channel) => {
      return <li
        key={channel.name}
        onClick={this.props.handleChannelChange}
        ><button id={channel.name}>{channel.name}</button></li>
    })

    return (
      <div className="navigation_channels_list">
        <h2>Channels</h2>
        <input type="text" placeholder="New channel name" onChange={this.handleChange} />
        <button onClick={this.handleClick}>+</button>
        <ul>
          {channelLis}
        </ul>
      </div>
    )
  }
}

export default ChannelsList;
