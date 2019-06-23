import React, { Component, Fragment } from 'react';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

import LoginPage from './LoginPage';
import SignupPage from './SignupPage';
import ProfilePage from './ProfilePage';

import withProps from './hocs/withProps';

import rootReducer from './reducers/rootReducer';

const thunkMiddleWare = applyMiddleware(thunk)
const store = createStore(rootReducer, thunkMiddleWare)

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
