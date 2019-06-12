import React from 'react';
import LoginPage from './LoginPage'
import SignupPage from './SignupPage'
import IndexPage from './IndexPage'

class App extends React.Component {
  state = {
    page: "login" // "index", "signup", "login"
  }

  redirect = (page) => {
    this.setState({
      page: page
    })
  }

  render() {
    if (this.state.page === "index") {
      return <IndexPage />
    } else if (this.state.page === "signup") {
      return <SignupPage redirect={this.redirect} />
    } else if (this.state.page === "login") {
      return <LoginPage redirect={this.redirect} />
    }
  }
}

export default App;
