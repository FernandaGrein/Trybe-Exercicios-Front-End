import { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';
import { fetchDog } from './redux/reducer/reducer';

class App extends Component {
  render() {
    const { src, isFetching, fetchDog } = this.props
    return isFetching ? (
      <p>Loading...</p>
    ) : (
      <div>
      <button onClick={fetchDog} type="button">
        Proximo Doguinho
      </button>
      <img src={src} alt="dog" />
    </div>
    )
  }
}


  const mapStateToProps = (state) => ({
    // passa o estado global para o componente 
    // nomeNovo: estado. nomeDentroDoINICIAL_STATE
    src: state.imagePath,
    isFetching: state.isFetching,
  })

  const mapDispatchToProps = (dispatch) => ({
    // faz o dispatch da thunkCreater
    // faz também o dispatch das actionsCreater
    fetchDog: () => dispatch(fetchDog()),
  })

export default connect(mapStateToProps, mapDispatchToProps)(App);
