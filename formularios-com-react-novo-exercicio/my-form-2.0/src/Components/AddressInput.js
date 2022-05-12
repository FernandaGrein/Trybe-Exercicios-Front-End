import React from "react";

class AddressInput extends React.Component{
    render(){
        const { propAddres, propOnChange } = this.props
        const { propCity, propOnChangeCity } =this.props
        return(
        <>
            <label> Addres:
              <input
                type="text"
                id={propAddres}
                name="addres"
                value={ propAddres }
                onChange={propOnChange}
                maxLength="200"
                required
              />
            </label>
            <label> City:
              <input
                type="text"
                id={propCity}
                name="city"
                value={ propCity }
                onChange={ propOnChangeCity }
                maxLength="28"
                required
              />
            </label>
        </>);
    }
}

export default AddressInput;
