import React, {Component} from 'react';
import Date from './Components/Date';
import './App.css';

class App extends Component {
  render(){
    return (
      <div className="App">
        <h1>Où faire du sport à Paris ?</h1>
        <Date />
      </div>
    );
  }
}

export default App;
