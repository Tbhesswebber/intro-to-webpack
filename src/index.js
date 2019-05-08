import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';

const App = () => <h1>Hello, World!</h1>;
// const App = () => React.createElement('h1', { children: 'Hello, World!' });

ReactDOM.render(App, document.getElementById('root'));
// ReactDOM.render(React.createElement(App), document.getElementById('root'));
