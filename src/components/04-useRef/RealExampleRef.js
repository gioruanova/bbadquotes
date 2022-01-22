import React, { useState } from 'react';
import '../02-useEffect/effects.css'
import { MultipleCustomHooks } from "../03-examples/MultipleCustomHooks";


export const RealExampleRef = () => {


    const [show, setShow] = useState(false);


    return (
        <div>

            <hr />
            {show && <MultipleCustomHooks />}
            <button
                className="btn"
                onClick={() => {
                    setShow(!show);
                }}
            >
                Say my name!
            </button>


        </div>
    );
};
