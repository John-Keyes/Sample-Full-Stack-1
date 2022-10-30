import React from 'react';

const Button = ({additionalButtonStyles, toggle}) => {
    return (
        <div style={{justifyContent: "center", textAlign: "center", additionalButtonStyles}} onMouseEnter={(e) => console.log(e.currentTarget.style)} onMouseLeave={(e) => console.log(e.currentTarget.style)} onClick={() => toggle}>
        </div>
    );
}

export default Button;

//If text: <span className="buttonText">text</span>
