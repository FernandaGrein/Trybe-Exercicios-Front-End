import React from "react";


class InputEstado extends React.Component {
    render() {
        const { estadoFavorito, onInputChange } = this.props
        return (<label htmlFor="estadoFavorito">
        <p>Diga qual o seu Estado favorito! </p>
        <textarea 
        name="estadoFavorito"
        id="estadoFavorito"
        value={ estadoFavorito } // 'pega o valor do estado, predefindo como '' e dpois alterado '
        onChange={ onInputChange } // "chama a função que altera o Estado pegando do valor do input"
      />
    </label>);
    }
}

export default InputEstado;
