import React, { Component } from 'react';
import Popup from './Popup';
import ParisMap from './ParisMap';

class Content extends Component{

  constructor(props){
    super(props)
    this.state = {
      chosenSport: this.props.chosenSport
    }
  }

  render(){
    return(
      <div>
        <ParisMap />
        <Popup sport={this.state.chosenSport} />
      </div>
    )
  }
}

export default Content;