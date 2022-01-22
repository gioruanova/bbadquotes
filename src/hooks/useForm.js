import { useState } from "react/cjs/react.development";

export const useForm = (initialstate = {}) => {
    const [values, setValues] = useState(initialstate);

    const handleInputchange = ({ target }) => {
        setValues({
            ...values,
            [target.name]: target.value
        });
    }

    return [values, handleInputchange];

};
