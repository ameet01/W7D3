import React from 'react';

class PokemonIndex extends React.Component {
  componentDidMount() {
    this.props.requestAllPokemon();
  }

  render() {
    return (
      <ul>
        {this.props.pokemon.map((poke) => <li><img width='40px' src={poke.image_url}/>{poke.name}</li>)}
      </ul>
    );
  }
}

export default PokemonIndex;
