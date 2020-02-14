import React from 'react';
import './Popup.css';
import './Landing.css';
import MyApp from './Components/MyApp'
import {useEffect} from 'react';



function App() {
  useEffect(() => {
    fetch('http://localhost:8000/sport/list/selected/practice/5201/false/false/false')
    .then(response => response.json())
      .then(result => console.log(result)
    )
  });
  
  return (
    <div className="App">
      <MyApp></MyApp>
    </div>
  );
}

export default App;
