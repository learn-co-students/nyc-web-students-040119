import React, { Component } from 'react'
import { connect } from 'react-redux'

class Counter extends Component {
  increment = () => {
    this.props.incrementCount()
    // store.dispatch({ type: "INCREMENT_COUNT", count: 1 })
    // this.setState(prevState => ({ count: prevState.count + 1 }));
  };

  decrement = () => {
    this.props.decrementCount()
    // store.dispatch({ type: "DECREMENT_COUNT", count: 1 })
    // this.setState(prevState => ({ count: prevState.count - 1 }));
  };

  render() {
    console.log(this.props);
    return (
      <div className="Counter">
        <h1>{this.props.count}</h1>
        <button onClick={this.decrement}> - </button>
        <button onClick={this.increment}> + </button>
      </div>
    );
  }
}

function mapStateToProps(state, props) {
  // have access to my state (reading, getter)
  return { count: state.count }
}

function mapDispatchToProps(dispatch, props) {
  // have access to dispatch (writing, setter)
  return {
    incrementCount: function() {
      dispatch({ type: "INCREMENT_COUNT", count: 1 })
    },
    decrementCount: function() {
      dispatch({ type: "DECREMENT_COUNT", count: 1})
    }
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Counter)
