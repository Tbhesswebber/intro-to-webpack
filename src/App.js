import React from 'react';
import ReactDOM from 'react-dom';

const Thingy = () => import(/* webpackChunkName: "Thingy" */ './Thingy');

class App extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      showComponent: false,
    };

    this.toggleShowComponent = this.toggleShowComponent.bind(this);
  }

  toggleShowComponent() {
    this.setState(prevState => ({ showComponent: !prevState.showComponent }));
  }

  render() {
    const { showComponent } = this.state;
    return (
      <>
        {showComponent ? <Thingy /> : null}
        <button onClick={this.toggleShowComponent}>Show Component</button>
      </>
    );
  }
}
// const App = () => React.createElement('h1', { children: 'Hello, World!' });

export default App;
