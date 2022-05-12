import React from "react";

class EmailInput extends React.Component {
    render () {
        const { email, onInputChange } = this.props
        return (<label>
            <p>Email: </p>
            <input 
            type="email"
            name ="email"
            value={ email } 
            onChange={ onInputChange } 
            />
        </label>);
    }
}

export default EmailInput;
