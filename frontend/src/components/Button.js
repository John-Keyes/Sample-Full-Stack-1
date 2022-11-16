import React from 'react';
import "../Styles/General.scss";

const Button = ({additionalButtonStyles, toggle, text}) => {
    return (
        <div className="isButton" style={additionalButtonStyles} onClick={() => toggle()}>{text}
        </div>
    );
}

export default Button;

//If text: <span className="buttonText">text</span>
