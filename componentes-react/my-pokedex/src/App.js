import './App.css';
import CreatePokedex from './Components/Pokedex';
import Header from './Components/Header';
import pokemons from './data';

function App() {
  return (
    <div className="App">
      <Header />
      <CreatePokedex data ={ pokemons }/>
    </div>
  );
}

export default App;
