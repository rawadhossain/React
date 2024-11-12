import React, { useState } from 'react';
import { createContext } from 'react';
// Context API

const BulbContext = createContext();

const App = () => {
    //context provider in App which is better but not optimal, less nicer to use
    const [BulbOn, setBulbOn] = useState(false);

    return (
        <div>
            <BulbContext.Provider value={{ BulbOn, setBulbOn }}>
                <Light />
            </BulbContext.Provider>
        </div>
    );
};

const Light = () => {
    return (
        <div>
            <LightBulb />
            <LightSwitch />
        </div>
    );
};

const LightBulb = ({ BulbOn }) => {
    const { BulbOn } = useContext(BulbContext);

    return <div>{BulbOn ? 'Bulb is on' : 'Bulb is off'}</div>;
};

const LightSwitch = ({ BulbOn, setBulbOn }) => {
    const { BulbOn, setBulbOn } = useContext(BulbContext);

    function toggleLight() {
        // setBulbOn((currentState) => !currentState);
        setBulbOn(!BulbOn);
    }

    return (
        <div>
            <LightBulb BulbOn={BulbOn} />
            <button onClick={toggleLight}>Toggle Light</button>
        </div>
    );
};

export default App;
