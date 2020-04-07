import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Popular from './components/Popular';
import Battle from './components/Battle';

// This defines the component
class App extends React.Component {
  render() {
    return (
      <div className='container'>
        <Popular />
      </div>
    );
  }
}

// This tells you how to use the component
ReactDOM.render(<App />, document.getElementById('app'));
