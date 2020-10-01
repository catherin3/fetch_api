import React from 'react';


class App extends React.Component {

  state = {
    loading: true,
    abilities: null
  }

  async componentDidMount() {
    const url = "https://pokeapi.co/api/v2/pokemon/ditto";
    const response = await fetch(url);
    const data = await response.json();
    this.setState({ abilities: data.abilities[0], loading: false });
    // console.log(data.abilities[0]);
  }

  render() {
    return (
      <div>
        {this.state.loading || !this.state.abilities ? (
          <div>loading...</div>
        ) : (
            <div>
              <div>{this.state.abilities.ability.name}</div>
              <div>{this.state.abilities.ability.url}</div>
              <div>{this.state.abilities.slot}</div>
            </div>
          )}

      </div>
    );
  }
}
export default App;
