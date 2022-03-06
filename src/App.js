import React from "react";

class App extends React.Component {

  componentDidMount() {
    fetch('http://[::1]:3000/api/v1/workouts/1', {
      method: 'GET'
  })
    .then(response => response.json())
    .then(resp => console.log(resp))
  }

  render(){
    return (
      <div>
      Hello World
      </div>
    );
  }
}

export default App;
