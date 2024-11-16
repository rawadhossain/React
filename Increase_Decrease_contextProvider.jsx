import React, { useState, createContext } from 'react';

const CountContext = createContext();

const CountContextProvider = ({ children }) => {
    const [count, setCount] = useState(0);

    return (
        <CountContext.Provider value={{ count, setCount }}>
            {children}
        </CountContext.Provider>
    );
};

const Count_Controller = () => {
    return (
        <div>
            <CountContextProvider>
                <Increase />
                <Decrease />
                <Value />
            </CountContextProvider>
        </div>
    );
};

// Increase and Decrease doesn't need to render the buttons, only value should be rendered upon each click
const Increase = () => {
    const { setCount } = useContext(CountContext); //it doesnt need count

    return (
        <button onClick={() => setCount((count) => count + 1)}>Increase</button>
    );
};

const Decrease = () => {
    const { setCount } = useContext(CountContext); //it doesnt need count

    return (
        <button onClick={() => setCount((count) => count - 1)}>Decrease</button>
    );
};

const Value = () => {
    const { count } = useContext(CountContext);
    return <p>Count: {count}</p>;
};

const App1 = () => {
    return (
        <div>
            <Count_Controller />
        </div>
    );
};

export default App1;
