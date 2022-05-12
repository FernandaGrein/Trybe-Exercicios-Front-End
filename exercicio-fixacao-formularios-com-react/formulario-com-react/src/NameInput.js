import React from "react";

class NameInput extends React.Component {
    render () {
        const { name, onInputChange } = this.props
        return (    <label>
            <p>Nome: </p>
            <input
            type="text"
            name="nome"
            value={ name } 
            onChange={ onInputChange } 
            />
        </label>);
    }
}

export default NameInput;
