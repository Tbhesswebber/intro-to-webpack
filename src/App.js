import React from 'react';
import ReactDOM from 'react-dom';

const App = () => {
  return (
    <h1>
      Hello, World!
      {
        void setTimeout(() => {
          throw new Error('Mooo');
        }, 1000)
      }
    </h1>
  );
};
// const App = () => React.createElement('h1', { children: 'Hello, World!' });

export default App;
