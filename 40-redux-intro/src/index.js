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
        count: state.count + action.count
      }
      break;
    case "DECREMENT_COUNT":

      return {
        ...state,
        count: state.count - action.count
      }

      break;
    // case "INCREMENT_COUNT_3":
    //   // state = {count: 1}
    //
    //   return {
    //     ...state,
    //     count: state.count + 3
    //   }
    //   break;
    // case "DECREMENT_COUNT_3":
    //
    //   return {
    //     ...state,
    //     count: state.count - 3
    //   }
    //
    //   break;
    // case "INCREMENT_COUNT_5":
    //   // state = {count: 1}
    //
    //   return {
    //     ...state,
    //     count: state.count + 5
    //   }
    //   break;
    // case "DECREMENT_COUNT_5":
    //
    //   return {
    //     ...state,
    //     count: state.count - 5
    //   }
    //
    //   break;
    default:
      return state
  }
}

const store = createStore(reducer)

store.dispatch({ type: 'INCREMENT_COUNT', count: 2 })
store.dispatch({ type: 'INCREMENT_COUNT', count: 6 })
store.dispatch({ type: 'INCREMENT_COUNT', count: 1 }) // count: 9
console.log(store.getState());
store.dispatch({ type: 'DECREMENT_COUNT', count: 1 }) // count: 8
console.log(store.getState());
// store.dispatch({ type: 'DECREMENT_COUNT_3' }) // count: -1
// store.dispatch({ type: 'INCREMENT_COUNT_5' }) // count: 4
// console.log(store.getState());


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
  render() {
    return (
      <div className="App">
        <Header />
        <Counter />
      </div>
    );
  }
}

class Header extends Component {
  componentDidMount() {
    store.subscribe(() => this.forceUpdate())
  }

  renderDescription = () => {
    const remainder = store.getState().count % 5;
    const upToNext = 5 - remainder;
    return `The current count is less than ${store.getState().count + upToNext}`;
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
  componentDidMount() {
    store.subscribe(() => this.forceUpdate())
  }

  increment = () => {
    store.dispatch({ type: "INCREMENT_COUNT", count: 1 })
    // this.setState(prevState => ({ count: prevState.count + 1 }));
  };

  decrement = () => {
    store.dispatch({ type: "DECREMENT_COUNT", count: 1 })
    // this.setState(prevState => ({ count: prevState.count - 1 }));
  };

  render() {
    return (
      <div className="Counter">
        <h1>{store.getState().count}</h1>
        <button onClick={this.decrement}> - </button>
        <button onClick={this.increment}> + </button>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
