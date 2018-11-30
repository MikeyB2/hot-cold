import React from 'react';

import GuessCount from './guessCount';
import NumberOfGuesses from './numberOfGuesses';

export default function Guesses(props) {
    const { guesses } = props;
    const guessCount = guesses.length;

    return (
        <section>
            <GuessCount guessCount={guessCount} />
            <NumberOfGuesses guesses={guesses} />
        </section>
    );
}