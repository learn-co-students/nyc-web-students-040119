// ALWAYS WHEN CREATING A REACT COMPONENT
import React from 'react';
import data from './data.js';
import NavigationContainer from './NavigationContainer';
import MessagesContainer from './MessagesContainer';
import './App.css'

class App extends React.Component {
  handleChannelChange = (event) => {
    console.log(event.target.id);
  }

  render() {
    const selectedChannel = data.channels.find(function(channel) {
      return channel.selected
      // return channel.selected === true
    })

    return (
      <div className="grid-container">
        <NavigationContainer
          handleChannelChange={this.handleChannelChange}
          current_user={data.current_user}
          channels_list={data.channels} />
        <MessagesContainer
          currentUser={data.current_user}
          channelName={selectedChannel.name}
          messages={selectedChannel.messages} />
      </div>
    );
  }
}

export default App;
