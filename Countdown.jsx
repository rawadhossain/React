import { useEffect, useState } from 'react';
//useEffect

function App() {
    const [showTimer, setShowTimer] = useState(true);

    useEffect(() => {
        setInterval(() => {
            setShowTimer((currentShowTimer) => !currentShowTimer);
        }, 5000);
    }, []);

    return <div>{showTimer && <Timer />}</div>;
}

/*
    App Component:
    - The App component has a state variable showTimer, initialized to true.
    - The useEffect in App sets up a setInterval that toggles showTimer between true and false every 5 seconds (5000 milliseconds).
    - When showTimer is true, the Timer component is displayed. When showTimer is false, Timer is removed from the DOM.
 */

function Timer() {
    const [seconds, setSeconds] = useState(0);

    useEffect(() => {
        const clock = setInterval(() => {
            setSeconds((prev) => prev + 1);
        }, 1000);

        return () => clearInterval(clock); // Cleanup on unmount
    }, []);

    return <div>{seconds} seconds elapsed</div>;
}

/*
Timer Component:
- The Timer component has a state variable seconds, initialized to 0.
- The useEffect in Timer sets up a setInterval that increments seconds by 1 every second (1000 milliseconds).
- The useEffect in Timer also has a cleanup function (clearInterval) to stop the timer when the component unmounts (when showTimer changes to false in App).
*/
export default App;
