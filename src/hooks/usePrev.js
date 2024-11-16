import { useEffect, useRef } from 'react';

export const usePrev = (value) => {
    //0 , 1
    const ref = useRef(); //initally: undefined // 0

    useEffect(() => {
        ref.current = value; //then updates to 0 // updates to 1
    }, [value]);

    return ref.current; // returns undefined // 0
};
//usePrev => it returns first, effect gets called later
