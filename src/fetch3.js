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

    if (this.state.loading) {
      return <div>loading...</div>
    }
    if (!this.state.abilities) {
      return <div>Did not get the result</div>
    }

    return (
      <div>
        <div>{this.state.abilities.ability.name}</div>
        <div>{this.state.abilities.ability.url}</div>
        <div>{this.state.abilities.slot}</div>
      </div>
    );
  }
}
export default App;
