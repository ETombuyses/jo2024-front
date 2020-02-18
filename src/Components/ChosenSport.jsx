import React, { Component } from 'react';
import Sport from './Sport';

class ChosenSport extends Component{
  render(){
    return(
      <div>
        <p>Épreuve choisie</p>
        <Sport name={this.props.nameSport} pic={this.props.namePic} value="20" />
      </div>
    )
  }
}

export default ChosenSport;