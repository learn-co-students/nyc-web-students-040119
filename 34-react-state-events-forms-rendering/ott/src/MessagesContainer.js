import React from 'react';
import Message from './Message'

class MessagesContainer extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      message: "",
      messages: [...props.messages]
    }
  }

  handleChange = (event) => {

    this.setState({
      message: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault();

    const messageObj = {
      user: this.props.currentUser,
      message: {
        // id: 3,
        // sent: "some-date",
        text: this.state.message
      }
    }

    this.setState({
      messages: [...this.state.messages, messageObj],
      message: ""
    })

  }

  render() {
    const messageLis = this.state.messages.map(function(message) {
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
            placeholder={`Message ${this.props.channelName}`}
            onChange={this.handleChange}
            value={this.state.message}
          />
          <input type="submit" />
        </form>
      </div>
    )
  }
}

export default MessagesContainer;
