import { useEffect, useState } from 'react';
//useEffect

function App() {
    const [count1, setCount1] = useState(1);
    const [count2, setCount2] = useState(1);

    increaseCount = () => {
        setCount1((currVal) => currVal + 1);
    };

    decreaseCount = () => {
        setCount2((currVal) => currVal - 1);
    };

    useEffect(() => {
        console.log('count1: ', count1);
        console.log('count2: ', count2);
        setInterval(increaseCount, 5000);
        setInterval(decreaseCount, 8000);
    }, []); //rendered only once

    useEffect(() => {
        console.log('count has been updated to');
        console.log('count1: ', count1);
        console.log('count2: ', count2);
    }, [count1, count2]); //rendered when count1 or count2 changes

    return (
        <div>
            count1: {count1} count2: {count2}
        </div>
    );
}

export default App;
