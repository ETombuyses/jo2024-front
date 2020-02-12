import React from 'react';
import Football from '../assets/img/Football.svg'

class CurrentSport extends React.Component{
  constructor(){
    super();
    this.state ={
      
    }
  }
  


  render(){
    return(
      <div className="landingCurrentSportWrapper">
        <img src={Football} alt="Sport" onClick={this.props.onClick}/>
        <h3>{this.props.name}</h3>
      </div>
    )
  }
  
  
}

export default CurrentSport;