import React from 'react';
import Message from './Message'

class MessagesContainer extends React.Component {
  render() {

    const messageLis = this.props.messages.map(function(message) {
      return <Message key={message.message.id} user={message.user} text={message.message.text} />
    })

    return (
      <div className="messages_container">
        <h2>{this.props.channelName}</h2>
        <ul>
          {messageLis}
        </ul>
      </div>
    )
  }
}

export default MessagesContainer;
