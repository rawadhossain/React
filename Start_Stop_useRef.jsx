import React, { useState, useRef } from 'react';

const stopwatch = () => {
    const [time, setTime] = useState(0);
    const ref = useRef();

    const start = () => {
        let value = setInterval(() => {
            setTime((time) => time + 1);
        }, 1000);
        ref.current = value;
    };

    const stop = () => {
        clearInterval(ref.current);
    };

    return (
        <div>
            timer: {time}
            <button onClick={start}>Start</button>
            <button onClick={stop}>Stop</button>
        </div>
    );
};

export default stopwatch;
