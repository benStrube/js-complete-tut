import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App';

ReactDom.hydrate(
    <App />
    document.getElementById('mountNode'),
);
