// ALWAYS WHEN CREATING A REACT COMPONENT
import React from 'react';
import data from './data.js';
import NavigationContainer from './NavigationContainer';
import MessagesContainer from './MessagesContainer';
import './App.css'

function App() {
  const selectedChannel = data.channels.find(function(channel) {
    return channel.selected
    // return channel.selected === true
  })

  return (
    <div className="grid-container">
      <NavigationContainer
        current_user={data.current_user}
        channels_list={data.channels} />
      <MessagesContainer
        channelName={selectedChannel.name}
        messages={selectedChannel.messages} />
    </div>
  );
}

export default App;
