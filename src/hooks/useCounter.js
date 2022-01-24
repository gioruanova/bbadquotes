import { useState } from 'react';



export const useCounter = (initialState = 10) => {

    const [counter, setCounter] = useState(initialState);
    const randomQuote = Math.floor(Math.random() * 30);

    
    const reset = () => {
        setCounter(initialState);
    }

    const increment = () => {
        setCounter(randomQuote + 1);
    }

    const decrement = () => {
        setCounter(counter);
    }

    return {
        counter,
        increment,
        decrement,
        reset
    };
}