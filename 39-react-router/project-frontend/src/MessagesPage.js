import React from 'react';
import { Link } from 'react-router-dom';

class MessagesPage extends React.Component {
  render() {
    return <div>
      Hello {this.props.user.username} from MessagesPage
      <Link to="/">See index</Link>
    </div>
  }
}

export default MessagesPage;
