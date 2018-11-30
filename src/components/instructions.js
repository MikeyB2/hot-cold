import React from 'react';

// import './instructions.css';

export default function Instructions(props) {
    return (
        <section id="what" tabIndex="-1">
            <h2>How to Play?</h2>
            <p>Just like the Hot or Cold game you used to play as kids:</p>
            <ol>
                <li>I, the computer, will pick a <strong>random number</strong> between 1 to 100 that you will have to guess.</li>
                <li>You need to <strong>guess</strong> until I tell you that you figured out the number I picked.</li>
                <li>You will get <strong>Hints</strong> on how you get by saying variations of Hot or Cold.</li>
            </ol>
        </section>
    );
}