import React from 'react';

class Profile extends React.Component {
  render() {
    console.log('Profile user', this.props.user);
    return (
      <div>
        <img src={this.props.user.profile_picture} />
        <p>{this.props.user.username}</p>
      </div>
    )
  }
}

export default Profile;
