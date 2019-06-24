import React from 'react';
import LoginPage from './LoginPage'
import SignupPage from './SignupPage'
import IndexPage from './IndexPage'
import MessagesPage from './MessagesPage'

import { Switch, Route } from 'react-router-dom';

class App extends React.Component {
  state = {
    user: {}
  }

  componentDidMount() {
    if (!!localStorage.token) {
      fetch('http://localhost:3000/profile', {
        headers: {
          'Authorization': localStorage.getItem("token")
        }
      }).then(resp => resp.json())
        .then(user => {
          this.setState({ user })
        })

    }
  }

  render() {
    console.log(this.state);
    return (
      <Switch>
        <Route exact
          path="/messages"
          render={routerProps => <MessagesPage user={this.state.user} {...routerProps} />} />
        <Route exact path="/login" component={LoginPage} />
        <Route exact path="/signup" component={SignupPage} />
        <Route exact
          path="/"
          render={({ location, history, match }) => <IndexPage user={this.state.user} location={location} />}
        />
      </Switch>
    )
    // switch (this.state.page) {
    //   case "index":
    //     return <IndexPage></IndexPage>
    //     break;
    //   case "signup":
    //     return <SignupPage redirect={this.redirect} />
    //     break;
    //   case "login":
    //     return <LoginPage redirect={this.redirect} />
    //     break
    //   default:
    //     return <IndexPage></IndexPage>
    // }
  }
}

export default App;
