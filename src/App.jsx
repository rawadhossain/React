import { useEffect, useState } from 'react';

function App() {
    // const [count, setCount] = useState(0);

    return (
        <div>
            <h3>hi there, folks!</h3>
            <Counter></Counter>
        </div>
    );
}

function Counter() {
    const [count, setCount] = useState(0);

    // Use the useEffect hook to run side effects in function components
    useEffect(() => {
        // Initialize a setInterval to increment the 'count' state variable every second (1000 ms)
        setInterval(() => {
            // Use the functional form of setCount to ensure we are working with the latest value of 'count'
            // setCount((count) => count + 1);
            setCount((count) => count + 1);
        }, 1000);

        // Log a message when the component mounts
        console.log('Mounted'); //called only once
    }, []); // Pass an empty dependency array to run this effect only once, when the component mounts

    function increaseCount() {
        setCount(count + 1);
    }

    function decreaseCount() {
        setCount(count - 1);
    }

    function ResetCount() {
        setCount(0);
    }

    return (
        <div>
            <h1>{count}</h1>
            <button onClick={increaseCount}>Increase Count</button>
            <button onClick={decreaseCount}>Decrease Count</button>
            <button onClick={ResetCount}>Reset Count</button>
        </div>
    );
}

export default App;
