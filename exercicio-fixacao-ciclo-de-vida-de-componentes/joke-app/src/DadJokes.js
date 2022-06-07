import React from 'react';

class DadJoke extends React.Component {
  constructor() {
    super();

    this.saveJoke = this.saveJoke.bind(this);
    this.jokeElement = this.jokeElement.bind(this);

    this.state = {
      jokeObj: undefined,
      loading: true,
      storedJokes: [],
    }
  }

  async fetchJoke() {
      this.setState(
      { loading: true }, // parâmetro anterior, previusState
      async() => {  // segundo parâmetro, "funciona como" o .then
        // só quando o estado estiver atualizado é que a piada vai ser renderizada, 
        // antes disso o loading é renderizado
        // roda apenas após setar o estado
        const requestHeaders = { headers: { Accept: 'application/json' } }
        const requestReturn = await fetch('https://icanhazdadjoke.com/', requestHeaders)
        const requestObject = await requestReturn.json();
        this.setState({
          loading: false, 
          jokeObj: requestObject,
        })
      })
    
  }

  componentDidMount() {
    this.fetchJoke();
  }

  saveJoke() {
    //Esse método será responsável por salvar a piada no array de piadas storedJokes!!
    this.setState(({ storedJokes, jokeObj }) => ({
        storedJokes: [ ...storedJokes, jokeObj ]
    }))

    this.fetchJoke();
  }

  jokeElement() {
      return (<div>
        <p>{this.state.jokeObj.joke}</p>
        <button type="button" onClick={this.saveJoke}>
          Salvar piada!
        </button>
      </div>)
  }

  render() {
    const { storedJokes, loading } = this.state;
    const loadingElement = <span>Loading...</span>;
    // console.log('renderizou'); // o render roda 2 vezes, uma pro loading e outra para piada
    return (
      <div>
        <span>
          {storedJokes.map(({ id, joke }) => (<p key={id}>{joke}</p>))}
        </span>
        <section>{ loading ? loadingElement : this.jokeElement() }</section>

      </div>
    );
  }
}

export default DadJoke;