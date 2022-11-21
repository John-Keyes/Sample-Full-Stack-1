import React from 'react';
import "../Styles/General.scss";

const Button = ({additionalClassNames, toggle, text}) => {
    return (
        <div className={`isButton  ${additionalClassNames}`} onClick={() => toggle()}>{text}
        </div>
    );
}

export default Button;

//If text: <span className="buttonText">text</span>
