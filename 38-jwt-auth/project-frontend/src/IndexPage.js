import React from 'react';

class IndexPage extends React.Component {
  componentDidMount() {
    fetch('http://localhost:3000/profile', {
      headers: {
        'Authorization': localStorage.getItem("token")
      }
    }).then(resp => resp.json())
      .then(console.log)
  }

  render() {
    return "Hello from IndexPage"
  }
}

export default IndexPage;
