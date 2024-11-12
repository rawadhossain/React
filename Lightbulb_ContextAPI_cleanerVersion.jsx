import React, { useState } from 'react';
import { createContext } from 'react';
// Context API

const BulbContext = createContext();

function BulbProvider({ children }) {
    //context provided outside our main APP componenet, cleaner to use
    const [BulbOn, setBulbOn] = useState(false);

    return (
        <BulbContext.Provider
            value={{
                BulbOn: BulbOn,
                setBulbOn: setBulbOn,
            }}
        >
            {children}
        </BulbContext.Provider>
    );
}

const App = () => {
    return (
        <div>
            <BulbProvider>
                <Light />
            </BulbProvider>
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

const LightBulb = () => {
    //no prop needed as argument

    const { BulbOn } = useContext(BulbContext); //I dont care where this state comes fro as long as it comes from somewhere

    return <div>{BulbOn ? 'Bulb is on' : 'Bulb is off'}</div>;
};

const LightSwitch = () => {
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
