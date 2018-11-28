import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import GameSection from './components/gameSection';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<GameSection />, document.getElementById('root'));

serviceWorker.unregister();
