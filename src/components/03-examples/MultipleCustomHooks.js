import React from 'react';
import { useFetch } from '../../hooks/useFetch';
import { useCounter } from '../../hooks/useCounter';
import '../02-useEffect/effects.css';

import bbad from '../../images/bbad.png'

export const MultipleCustomHooks = () => {

    const { counter, increment } = useCounter(Math.floor(Math.random() * 30));
    const { loading, data } = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`);
    const { author, quote } = !!data && data[0];

    

    return (
        <div>
            
            <img className="logo" src={bbad} alt="bbadlogo"></img>
            <h1>Quotes</h1>
            <hr />

            {loading
                ?
                (
                    <div className="alert alert-info text-center">
                        Loading...
                    </div>
                )
                :
                (
                    <blockquote className="blockquote">
                        <p className="mb-0 text-bold">{quote}</p>
                        <i className="blockquote-footer text-end">{author}</i>
                    </blockquote>
                )
            }

            <button
                className="btn"
                onClick={increment}>
                Next Quote
            </button>
            <footer className="footer-dev">Developed by Giorgio Ruanova</footer>
        </div>
    );
};
