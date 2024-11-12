import React, { useState } from 'react';

const App = () => {
    return (
        <div>
            <Light />
        </div>
    );
};

const Light = () => {
    const [BulbOn, setBulbOn] = useState(false);

    // BulbOn is the prop to the LightBulb component
    // BulbOn and setBulbOn are the props to the LightSwitch component
    return (
        <div>
            <LightBulb BulbOn={BulbOn} />
            <LightSwitch BulbOn={BulbOn} setBulbOn={setBulbOn} />
        </div>
    );
};

const LightBulb = ({ BulbOn }) => {
    return <div>{BulbOn ? 'Bulb is on' : 'Bulb is off'}</div>;
};

const LightSwitch = ({ BulbOn, setBulbOn }) => {
    function toggleLight() {
        setBulbOn((currentState) => !currentState);
    }

    return (
        <div>
            <LightBulb BulbOn={BulbOn} />
            <button onClick={toggleLight}>Toggle Light</button>
        </div>
    );
};
export default App;
