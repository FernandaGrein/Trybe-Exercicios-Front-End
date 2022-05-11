import React from 'react';
import Pokemon from './Pokemon';
import Button from './Button';

class Pokedex extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
          pokemonIndex: 0,
          filteredType: 'all',
        };
      }
    
    //   filterPokemons(filteredType) {
    //     this.setState({ filteredType, pokemonIndex: 0 });
    //   }
      
    
      nextPokemon(numberOfPokemons) {
          // numberOfPokemons é o tamanho do array de objetos com todos os pokemons
          //  numberOfPokemons = filteredPokemons.length
        this.setState(state => ({
          pokemonIndex: (state.pokemonIndex + 1) % numberOfPokemons,
        }));
      }
    
      fetchFilteredPokemons() {
        const { pokemons } = this.props;  // array de objetos com todos os pokemons - é a prop recebida no APP
        const { filteredType } = this.state; // all 
    
        return pokemons.filter(pokemon => {
          if (filteredType === 'all') return true;
          return pokemon.type === filteredType; // - Expected to return a value at the end of arrow function  array-callback-return
        });
      }
    
    //   fetchPokemonTypes() {
    //     const { pokemons } = this.props;
    
    //     return [...new Set(pokemons.reduce((types, { type }) => [...types, type], []))];
    //   }
    
      render() {
        const filteredPokemons = this.fetchFilteredPokemons();
      //  console.log(filteredPokemons); = um array de objetos com todos os pokemons
      //  const pokemonTypes = this.fetchPokemonTypes();
        const pokemon = filteredPokemons[this.state.pokemonIndex];
    
        return (
          <div className="pokedex">
            <Pokemon pokemon={ pokemon } />
            <div className="pokedex-buttons-panel">
              {/* <Button
                onClick={() => this.filterPokemons('all')}
                className="filter-button"
              >
                All
              </Button>
              {pokemonTypes.map(type => (
                <Button
                  key={ type }
                  onClick={() => this.filterPokemons(type)}
                  className="filter-button"
                >
                  { type }
                </Button>
              ))} */}
            </div>
            <Button
              className="pokedex-button"
              onClick={() => this.nextPokemon(filteredPokemons.length)}
              disabled={ filteredPokemons.length <= 1 }
            >
              Próximo pokémon
            </Button>
              {/* {this.props.pokemons.map(pokemon => <Pokemon key={pokemon.id} pokemon={pokemon} />)} */}
            </div>
        );
    }
}

export default Pokedex;