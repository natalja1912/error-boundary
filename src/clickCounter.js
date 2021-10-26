import React from 'react';
import { useState } from "react";

const ClickCounter = () => {
   const [counter, setCounter] = useState(0);
   const changeState = () => {
       setCounter(prev => prev+1);
   }

   if(counter === 5){
    throw new Error('error bad');
}

    return (
        <div>
            <button onClick={changeState}>CLICK {counter}</button>
            <input type='text' defaultValue='input' />
        </div>
    )
}

export default ClickCounter;