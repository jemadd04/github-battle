import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

// This defines the component
class App extends React.Component {
  render() {
    return <div>Hello World!</div>;
  }
}

// This tells you how to use the component
ReactDOM.render(<App />, document.getElementById('app'));
