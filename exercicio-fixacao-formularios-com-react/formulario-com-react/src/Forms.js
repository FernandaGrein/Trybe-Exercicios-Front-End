import React from "react";
import EmailInput from "./EmailInput";
import InputEstado from "./InputEstado";
import NameInput from "./NameInput";

class Form extends React.Component {
   state = {
       estadoFavorito:'',
       email:'',
       nome:'',
       idade: 0,
       vaiComparecer: false, 
       palavraChave:''
   }

  // validateEmail = (email) => email.replace(/[^\w\s]/gi, '')
   
   handleChange = ({ target }) =>{
     // event.target = ({ target }) - descontruido no parâmetro
     // console.log(target) - retorna o elemento do input com o name e o valor
     //  console.log (target.value) - retorna o valor colocado no input alterado
     //  const { name, } = target // event.target 
      const value = target.type === 'checkbox' ? target.checked : target.value
      this.setState(
        { 
            // os colchetes mudam dinânicamente a chave do objeto
          [target.name]: value // .toUpperCase()
        })
   }

   handleSubmit = () => {
       console.log('submit acionado');
   }

    render () {
        const { estadoFavorito, email, name } = this.state
        return (
        <div className="formulario">
            <h1>Estados e React - Tecnologia fantástica ou reagindo a regionalismos?</h1>
            <form onSubmit={ this.handleSubmit } className="form">
              <InputEstado estadoFavorito ={ estadoFavorito } onInputChange = { this.handleChange }/>
              <EmailInput email={ email } onInputChange={ this.handleChange }/>
              <NameInput name   ={ name } onInputChange={ this.handleChange } />
              {/* os demais inputs foram mantidos no forms apenas para guardar a primeira versão */}
              <label>
                 <p>Idade: </p>
                 <input
                   type="number"
                   name="idade"
                   value={ this.state.idade } 
                   onChange={ this.handleChange } 
                 />
              </label>
              <label>
                 <p>Vai comparecer? </p> 
                 <input
                    type="checkbox"
                    name="vaiComparecer"
                    value={ this.state.vaiComparecer } 
                    onChange={ this.handleChange } 
                 />
              </label>
              <label>
                  <p>Escolha sua palavra chave favorita!</p>
                  <select 
                    name="palavraChave"  
                    value={ this.state.palavraChave } 
                    onChange={ this.handleChange } > 
                  <option value="estado"> Estado </option>
                  <option value="evento">Evento</option>
                  <option value="props">Props</option>
                  <option value="hooks">Hooks</option>
                  </select>
              </label>
            </form>
            <button type="submit">Enviar Formulário</button>
          </div>
        );
    }
}

export default Form