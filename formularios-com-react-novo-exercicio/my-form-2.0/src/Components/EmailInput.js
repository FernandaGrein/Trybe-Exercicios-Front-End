import React from "react";

class EmailInput extends React.Component {
    render () {
        const { propEmail, propOnChange } = this.props;
        return(
            <>
        <label> Email: 
            <input 
            type = "email"
            id ={ propEmail }
            name = "name"
            value ={ propEmail }
            onChange ={ propOnChange }
            maxLength="50"
            required 
            />
        </label>
            </>);
    }
}

export default EmailInput;
