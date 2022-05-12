import React from "react";

class CpfInput extends React.Component {
  render() {
    const { propCpf, propOnChange } = this.props;
    return (
      <>
        <label> CPF:
          <input
            type="text"
            id={propCpf}
            name="cpf"
            value={propCpf}
            onChange={ propOnChange }
            maxLength="11"
            required
          />
        </label>
      </>
    );
  }
}

export default CpfInput;