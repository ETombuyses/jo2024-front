import React, {useEffect} from 'react';
import Date from './Components/Date';
import './App.css';

function App() {

  useEffect(()=>{
    fetch('http://127.0.0.1:8080/sport/list/selected/practice/5201/false/false/false')
      .then(response => response.json())
      .then(result => console.log(result)
      /* .catch(e => console.error(e.message)) */
    )
  });

  return (
    <div className="App">
      <h1>Où faire du sport à Paris ?</h1>
      <Date />
    </div>
  );
}

export default App;
