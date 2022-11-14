import React from "react";

import './styles.scss';

const ButtonComponent = ({ text, onClick}) => (
    <div className="button"
         onClick={onClick}
    >
            {text}
    </div>
)

export default ButtonComponent;
