import React from 'react';
import Message from './Message'

class MessagesContainer extends React.Component {
  state = {
    message: ""
  }

  handleChange = (event) => {
    this.setState({
      message: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()

    this.props.addMessage(this.state.message)
  }

  render() {
    console.log('MessagesContainer state', this.state);

    const messageLis = this.props.messages.map(function(message) {
      return <Message key={message.message.id} user={message.user} text={message.message.text} />
    })

    return (
      <div className="messages_container">
        <h2 className="messages_container_header">{this.props.channelName}</h2>
        <ul className="messages_container_list">
          {messageLis}
        </ul>
        <form className="messages_container_compose" onSubmit={this.handleSubmit}>
          <label htmlFor="new_file">↑</label>
          <input type="file"
            style={{display: 'none'}}
            id="new_file" name="new_file"
            accept="image/png, image/jpeg" />
          <input
            type="text"
            name="new_message_text"
            onChange={this.handleChange}
            placeholder={`Message ${this.props.channelName}`}
          />
          <input type="submit" />
        </form>
      </div>
    )
  }
}

export default MessagesContainer;
