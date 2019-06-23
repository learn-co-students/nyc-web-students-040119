import React, { Component, Fragment } from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import LoginPage from './LoginPage';
import SignupPage from './SignupPage';
import ProfilePage from './ProfilePage';

import withProps from './hocs/withProps';

import rootReducer from './reducers/rootReducer';

const store = createStore(rootReducer)

class App extends Component {

  render() {
    return (
      <Provider store={store}>
        <Fragment>
          <time style={{ color: this.props.color }}>
            {this.props.time}
          </time>
          <ProfilePage />
          <LoginPage />
          <SignupPage />
        </Fragment>
      </Provider>
    );
  }

}

export default withProps(App);
