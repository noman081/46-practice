import React, { useState } from 'react';

const Mobile = () => {
    const [counter, setCounter] = useState(100);
    const batteryDecrease = () => {
        const newCounter = counter - 10;
        if (newCounter < 0) {
            return;
        }
        else {
            setCounter(newCounter);
        }
    };
    return (
        <div>
            <h3>Battery: {counter}%</h3>
            <button onClick={batteryDecrease}>Battery Down</button>
        </div>
    );
};

export default Mobile;