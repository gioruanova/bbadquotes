import React, { useRef } from 'react';
import '../02-useEffect/effects.css'

export const FocusScreen = () => {

    const inputRef = useRef();


    const handleClick = () => {
        inputRef.current.select();

    }


    return (
        <div>
            <h1>Focus Screen</h1>
            <hr />
            <input
                ref={inputRef}
                className="form-control"
                placeholder="Su Nombre"
            />

            <button
                className="bttn btn-outline-primary mt-3"
                onClick={handleClick}>
                Focus
            </button>

        </div>
    );
};
