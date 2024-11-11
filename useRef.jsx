import React, { useRef } from 'react';

const FocusInput = () => {
    const inputRef = useRef(null);
    const handleFocus = () => {
        inputRef.current.focus();
    };

    return (
        <div>
            <input type="text" placeholder="Click here to focus username" />
            <button onClick={handleFocus}>Submit</button>
        </div>
    );
};

export default FocusInput;
