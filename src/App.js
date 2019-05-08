import { hot } from 'react-hot-loader/root';
import React from 'react';
import ReactDOM from 'react-dom';

const App = () => {
  return <h1>Hello, World!</h1>;
};
// const App = () => React.createElement('h1', { children: 'Hello, World!' });

export default hot(App);
