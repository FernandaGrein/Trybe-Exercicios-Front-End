import React from "react";

const Button = ({ className, children, disable, onClick }) => (
    <button
    onClick={ onClick }
    className={ `button-text ${className}` }
    disabled={ disable }
    >
        { children } 
    </button>
)


export default Button;

