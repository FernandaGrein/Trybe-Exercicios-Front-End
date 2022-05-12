import React from "react";

class NameInput extends React.Component {
  render() {
    const { propName, propOnChange } = this.props;
    return (
      <>
        <label> Name:
          <input
            type="text"
            id={propName}
            name="name"
            value={propName.toUpperCase()}
            onChange={propOnChange}
            maxlength="40"
            required
          />
        </label>
      </>
    );
  }
}

export default NameInput;
