import React, { useState } from 'react';

import SquareComponent from "./component";

import './styles.scss';

const Square = () => {
    const [counter, setCounter] = useState(0)
    const handledOnClickIncrement = () => setCounter(counter + 1);
    const handledOnClickDecrement = () => setCounter(counter - 1);

    return (
      <SquareComponent
          counter={counter}
          onClickIncrement={handledOnClickIncrement}
          onClickDecrement={handledOnClickDecrement}
      />
    );
}

export default Square;