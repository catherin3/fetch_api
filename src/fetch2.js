import React, { useState, useEffect } from 'react';

class App extends React.Component {

  constructor() {
    super();
    this.state = { jokes: [] };

  }

  componentDidMount() {
    fetch(`http://api.icndb.com/jokes`)
      .then(result => result.json())
      .then(jokes => this.setState({ jokes: jokes.value }))
  }

  render() {

    return (
      <div>
        {this.state.jokes.map(joke =>
          <div key={joke.id}> {joke.categories} </div>)}
      </div>
    );
  }
}
export default App;
