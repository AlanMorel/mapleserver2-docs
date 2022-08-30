import React, { useState } from "react";

const Counter = () => {
    const [counter, setCounter] = useState(0);

    const handleClick = () => {
        setCounter(counter + 1);
    };

    return (
        <div>
            <div>{counter}</div>
            <button onClick={handleClick}>+</button>
        </div>
    );
};

export default Counter;
