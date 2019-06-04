import React from 'react';
import Message from './Message'

class MessagesContainer extends React.Component {
  render() {

    const messageLis = this.props.messages.map(function(message) {
      return <Message key={message.message.id} user={message.user} text={message.message.text} />
    })

    return (
      <div className="messages_container">
        <h2 className="messages_container_header">{this.props.channelName}</h2>
        <ul className="messages_container_list">
          {messageLis}
        </ul>
        <div className="messages_container_compose">
          <label htmlFor="new_file">↑</label>
          <input type="file"
            style={{display: 'none'}}
            id="new_file" name="new_file"
            accept="image/png, image/jpeg" />
          <input type="text" name="new_message_text" placeholder={`Message ${this.props.channelName}`}/>
          <input type="submit" />
        </div>
      </div>
    )
  }
}

export default MessagesContainer;
