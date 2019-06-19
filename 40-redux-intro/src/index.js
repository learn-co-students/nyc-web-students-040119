import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import logo from "./logo.svg";
import "./App.css";

import { createStore } from 'redux';

const defaultState = { count: 0 }

function reducer(state = defaultState, action) {
  switch (action.type) {
    case "INCREMENT_COUNT":
      // state = {count: 1}

      return {
        ...state,
        count: state.count + 1
      }
      break;
    case "DECREMENT_COUNT":

      return {
        ...state,
        count: state.count - 1
      }

      break;
    default:
      return state
  }
}

const store = createStore(reducer)

store.dispatch({ type: 'INCREMENT_COUNT' })
store.dispatch({ type: 'INCREMENT_COUNT' })
store.dispatch({ type: 'INCREMENT_COUNT' }) // count: 3
console.log(store.getState());
store.dispatch({ type: 'DECREMENT_COUNT' }) // count: 2
console.log(store.getState());

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



class App extends Component {
  // state = { count: 0 };

  increment = () => {
    // this.setState(prevState => ({ count: prevState.count + 1 }));
  };

  decrement = () => {
    // this.setState(prevState => ({ count: prevState.count - 1 }));
  };

  render() {
    return (
      <div className="App">
        <Header count={null/*this.state.count*/} />
        <Counter
          count={null/*this.state.count*/}
          increment={null/*this.increment*/}
          decrement={null/*this.decrement*/}
        />
      </div>
    );
  }
}

class Header extends Component {
  renderDescription = () => {
    const remainder = this.props.count % 5;
    const upToNext = 5 - remainder;
    return `The current count is less than ${this.props.count + upToNext}`;
  };

  render() {
    return (
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">Welcome to React</h1>
        <h3>{this.renderDescription()}</h3>
      </header>
    );
  }
}

class Counter extends Component {
  render() {
    return (
      <div className="Counter">
        <h1>{this.props.count}</h1>
        <button onClick={this.props.decrement}> - </button>
        <button onClick={this.props.increment}> + </button>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
