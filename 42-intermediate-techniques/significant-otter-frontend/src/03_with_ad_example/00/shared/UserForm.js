import React, { Component } from 'react';

class UserForm extends Component {

  render() {
    return (
      <form>
        <input type="text" name="email" />
        <input type="password" name="password" />
        <input type="submit" value={this.props.submitValue} />
      </form>
    );
  }

}

export default UserForm;
