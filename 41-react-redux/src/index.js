import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import rootReducer from './reducers/rootReducer'
import App from './App'

import "./index.css";

const store = createStore(rootReducer)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);








/**

App
  Header
  Counter

Thinking in Redux:
  * Figure out state; state will be global; just an object
    { count: 0 }
  * Create a store to hold the state
    * Have to pass a reducer (function that calls setState) to the createStore
    * Has three useful functions for us:
      * `getState()`... just does what it says
      * `dispatch()` this (in combo with the reducer) will be like setState


**/
