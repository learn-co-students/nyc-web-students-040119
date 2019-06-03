// ALWAYS WHEN CREATING A REACT COMPONENT
import React from 'react';
import data from './data.js';
import NavigationContainer from './NavigationContainer';
import MessagesContainer from './MessagesContainer';

function App() {
  return (
    <div>
      <NavigationContainer user={data.current_user} />
      <MessagesContainer />
    </div>
  );
}

export default App;
