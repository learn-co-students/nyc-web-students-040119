import React, { Component } from 'react'
import Header from './Header'
import Counter from './Counter'
import "./App.css";
//
// export default class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <Header />
//         <Counter />
//       </div>
//     );
//   }
// }

export default class App extends Component {
  render() {
    return (
      React.createElement('div', {className: "App"}, [
        React.createElement(Header, {}, []),
        React.createElement(Counter, {}, [])
      ])
    )
  }
}
