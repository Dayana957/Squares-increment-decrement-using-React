import React from "react";

import './styles.scss';

const CounterComponent = ({ counter }) => (
    <div className="counter">
        {counter}
    </div>
)

export default CounterComponent;
