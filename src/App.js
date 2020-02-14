import React, {Component} from 'react';
import Date from './Components/SportsByDate/Date';
import './App.css';
class App extends Component {
  constructor(props) {
    super(props);
  }

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
