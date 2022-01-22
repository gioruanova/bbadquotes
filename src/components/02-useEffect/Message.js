import React from "react";
import { useEffect, useState } from "react/cjs/react.development";




export const Message = () => {


    const [coors, setCorrs] = useState({ x: 0, y: 0 });
    const { x, y } = coors;

    useEffect(() => {

        const mouseMove = (e) => {
            const coors = { x: e.x, y: e.y }
            setCorrs(coors);

        }

        window.addEventListener('mousemove', mouseMove)

        return () => {
            window.removeEventListener('mousemove', mouseMove);
        }
    }, [])

    return (
        <div>
            <h3>Eres genial</h3>
            <p>
                x:{x} y:{y}
            </p>
        </div>
    )
}

