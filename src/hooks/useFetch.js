import { useState } from "react";
import { useEffect } from "react/cjs/react.development";


export const useFetch = (url) => {

    const [state, setState] = useState({ data: null, loading: true, error: null });

    useEffect(() => {

        setState({ data: null, loading: true, error: null })

        fetch(url)
            .then(resp => resp.json())
            .then(data => {

                setState({
                    loading: false,
                    error: null,
                    data
                })

            })

    }, [url])

    return state;
}
