import React from 'react';

class LoginPage extends React.Component {
  state = {
    username: '',
    password: ''
  }

  componentDidMount() {
    if (!!localStorage.getItem("token")) {
      this.props.history.push("/")
    }
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleLogin = (event) => {
    event.preventDefault();

    fetch("http://localhost:3000/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(this.state)
    }).then(resp => resp.json())
      .then(data => {
        localStorage.setItem('token', data.token)
        this.props.history.push("/")
      })
  }

  render() {
    console.log('loginpage props', this.props);
    return (
      <form onSubmit={this.handleLogin}>
        <input type="text" name="username" onChange={this.handleChange} />
        <input type="password" name="password" onChange={this.handleChange} />

        <input type="submit" value="Log In" />
      </form>
    )
  }
}

export default LoginPage;
