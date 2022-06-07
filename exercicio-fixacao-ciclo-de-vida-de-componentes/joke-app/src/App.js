// import Counter from './Counter';
import DadJoke from './DadJokes';
import React, { Component }from 'react';
import './App.css';

class App extends Component {
  state = {
    characters: [],
  };

  // fetchCharacters = () => {
  //   fetch('https://rickandmortyapi.com/api/character')
  //   .then(response => response.json())
  //   .then(data => {
  //     this.setState({characters: data.results})
  //   })
  // }

  // componentDidMount = () => {
  //   this.fetchCharacters();
  // }
  componentDidMount() {
    fetch('https://rickandmortyapi.com/api/character')
    .then(response => response.json())
    .then(data => {
      this.setState({characters: data.results})
    })
  }

  render() {
    const { characters } = this.state;
    return (
      <div className="App">
        <DadJoke/>
        <h1>
          Ricky and Morty Characters:
        </h1>
        <section className='body'>
        { characters.map(({name, image}) => {
          return (<div className='container' key={ name }>
             <h3>{ name }</h3>
             <img src={ image } alt='name'/>
          </div>)
        }) }
        </section>
      </div>
    );
  }
}

export default App;