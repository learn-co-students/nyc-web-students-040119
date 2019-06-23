import React, { Component } from 'react';

import Page from './shared/Page';
import withAuth from './hocs/withAuth';

class ProfilePage extends Component {

  render() {
    return (
      <Page>
        <main>
          Here's {this.props.currentUser.name}!
        </main>
      </Page>
    );
  }

}

export default withAuth(ProfilePage);
