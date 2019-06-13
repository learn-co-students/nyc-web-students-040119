import React from 'react';
import { Link } from 'react-router-dom';

class IndexPage extends React.Component {
  render() {
    return <div>
      Hello {this.props.user.username} from IndexPage
      <Link to="/messages">See messages</Link>
    </div>
  }
}

export default IndexPage;
