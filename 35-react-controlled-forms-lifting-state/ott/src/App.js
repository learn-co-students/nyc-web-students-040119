// ALWAYS WHEN CREATING A REACT COMPONENT
import React from 'react';
import data from './data.js';
import NavigationContainer from './NavigationContainer';
import MessagesContainer from './MessagesContainer';
import './App.css'

class App extends React.Component {
  state = {
    channels: [...data.channels],
    selectedChannel: data.channels[0]
  }

  addChannel = (channelName) => {
    const channelObj = {
      name: `#${channelName}`,
      messages: []
    }

    this.setState({
      channels: [...this.state.channels, channelObj]
    }, () => console.log(this.state))
  }

  selectChannel = (channelName) => {
    const selectedChannel = this.state.channels.find(channel => {
      return channel.name === channelName
    });

    this.setState({
      selectedChannel: selectedChannel
    })
  }

  addMessage = (messageText) => {
    console.log(messageText);

    const messageObj = {
      user: {
        username: "Gwawers",
        profile_picture: "https://static1.squarespace.com/static/56a2975c1c1210a8054f79c1/t/5bb8fceaf4e1fc3d3ba65829/1538850033844/"
      },
      message: {
        // id: 3,
        // sent: "some-date",
        text: messageText
      }
    }

    const selectedChannelCopy = {
      ...this.state.selectedChannel,
      messages: [...this.state.selectedChannel.messages, messageObj]
    }

    const channelsCopy = [...this.state.channels]
    const selectedChannelIndex = channelsCopy.findIndex(channel => {
      return channel.name === selectedChannelCopy.name
    })

    channelsCopy.splice(selectedChannelIndex, 1, selectedChannelCopy)

    this.setState({
      selectedChannel: selectedChannelCopy,
      channels: channelsCopy
    })
  }

  render() {
    console.log('App state', this.state.selectedChannel);

    return (
      <div className="grid-container">
        <NavigationContainer
          addChannel={this.addChannel}
          current_user={data.current_user}
          channels_list={this.state.channels}
          selectChannel={this.selectChannel} />
        <MessagesContainer
          channelName={this.state.selectedChannel.name}
          messages={this.state.selectedChannel.messages}
          addMessage={this.addMessage}
         />
      </div>
    );
  }
}

export default App;
