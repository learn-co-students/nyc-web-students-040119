import React, { Component } from 'react';

import Page from './shared/Page';
import UserForm from './shared/UserForm';

import withAd from './hocs/withAd';

class SignupPage extends Component {
  render() {
    return (
      <Page>
        <UserForm submitValue="Sign up!" />
        <img 
          alt="another ad"
          src={this.props.ad.thumbnailUrl}
          width={100} />
      </Page>
    );
  }

}

export default withAd(SignupPage);
