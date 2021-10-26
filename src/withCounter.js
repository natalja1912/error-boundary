import React from 'react';
import { useState } from "react";

const withCounter = (WrappedComponent) => {
    return function NewComponent() {
        NewComponent.displayName = 'withCounter';
        const [counter, setCounter] = useState(0);
        const changeState = () => setCounter(prev => prev+1);
        return (
            <WrappedComponent counter={counter} changeState={changeState} />
        )
    }
}

export default withCounter;