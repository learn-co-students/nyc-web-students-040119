import React, { Component } from 'react';

export default class SnackItem extends Component {
  constructor() {
    super()

    console.log('SnackItem constructing');
  }

  componentDidMount() {
    console.log('SnackItem mounting');
  }

  componentWillUnmount() {
    console.log('SnackItem will unmount');
  }

  render() {
    console.log('SnackItem rendering');

    return (
      <li
        onClick={this.props.removeSnack}
        id={this.props.snack.id}>
        <img src={`/${this.props.snack.name}.jpg`} alt={this.props.snack.name}/>
        {this.props.snack.name}
      </li>
    )
  }
}
