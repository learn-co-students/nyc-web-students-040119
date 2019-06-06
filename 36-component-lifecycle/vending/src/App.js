import React from 'react';
import SnackItem from './SnackItem';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props)

    console.log('App constructing');

    this.state = {
      snacks: []
    }
  }

  removeSnack = (event) => {
    const newSnacks = this.state.snacks.filter(snack => {
      return snack.id !== parseInt(event.currentTarget.id)
    })

    setTimeout(() => {
      this.setState({
        snacks: newSnacks
      })

      fetch("http://localhost:3001/snacks/" + event.currentTarget.id)
    }, 1000)


    // LATER: send a fetch request

  }

  createSnackLis = () => {
    return this.state.snacks.map(snack => {
      return (
        <SnackItem
          key={snack.id}
          removeSnack={this.removeSnack}
          snack={snack} />
      )
    })
  }

  componentDidMount() {
    console.log('App mounted');
    fetch("http://localhost:3001/snacks")
      .then(response => response.json())
      .then(snacks => {
        this.setState({
          snacks: snacks
        })
      })
  }

  componentDidUpdate() {
    console.log('App updated');
  }

  render() {
    console.log('App rendering');
    return (
      <div className="App">
        {this.createSnackLis()}
      </div>
    );
  }
}

export default App;
