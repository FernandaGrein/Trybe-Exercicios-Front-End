import React from "react";
import AddressInput from "./AddressInput";
import CpfInput from "./CpfInput";
import EmailInput from "./EmailInput";
import NameInput from "./NameInput";

class Form extends React.Component {
   
    state = {
        name:'',
        email:'',
        cpf: '',
        addres:'',
        city:'',
    }
   
    handleChange = (event) => {
        const { name, value } = event.target
        this.setState({ [name]: value })
    }
   
    render () {
        const { name, email, cpf, addres, city } = this.state
        return (
        <>
        <h1> Personal Form </h1>
        <fieldset>
            <NameInput propName ={ name } propOnChange ={ this.handleChange } />
            <EmailInput propEmail ={ email } propOnChange={ this.handleChange } />
            <CpfInput propCpf = { cpf } propOnChange={ this.handleChange } />
            <AddressInput propAddres ={ addres } propOnChange={ this.handleChange } propCity={ city } propOnChangeCity={ this.handleChange } />
        </fieldset>
        </>);
    }
}

export default Form; 