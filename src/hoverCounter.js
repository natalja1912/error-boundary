import React from 'react';
import withCounter from './withCounter';

const HoverCounter = ({counter, changeState}) => {
    return (
        <div>
            <button onMouseEnter={changeState}>HOVER {counter}</button>
        </div>
    )
}

export default withCounter(HoverCounter);