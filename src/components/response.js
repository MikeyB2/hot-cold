// Response to guess section for hot and cold

import React from 'react';


import './response.css';


export default function Response(props) {
    const key = props.guessCount;

    let guessAgain;
    if (key !== 0) {
        guessAgain = <span className="visuallyhidden">Guess again!</span>;
    }

    return (
        <h2
            key={key}
            id="feedback"
            role="status"
        >
            {props.feedback} {guessAgain}
        </h2>
    );
}