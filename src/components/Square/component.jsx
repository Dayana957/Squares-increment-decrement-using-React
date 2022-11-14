import React from "react";

import ButtonComponent from "./button";
import CounterComponent from "./counter";

const SquareComponent = ({ counter, onClickIncrement, onClickDecrement }) => (
    <div className="square">
        <ButtonComponent
            text='+'
            onClick={onClickIncrement}
        />
        <CounterComponent
            counter={counter}
        />
        <ButtonComponent
            text='-'
            onClick={onClickDecrement}
        />
    </div>
)

export default SquareComponent;
