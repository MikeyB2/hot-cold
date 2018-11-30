import React from 'react';

import Nav from './nav';

// import './title.css';

export default function Title(props) {
    return (
        <header>
            <Nav
                onRestartGame={() => props.onRestartGame()}
            />
            <h1>HOT or COLD</h1>
        </header>
    );
}