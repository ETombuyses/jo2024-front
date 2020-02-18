import React, { Component } from 'react';
import Popup from './Popup';
import ParisMap from './ParisMap';

class Content extends Component{

  constructor(props){
    super(props)
    this.state = {
      chosenSport: this.props.chosenSport,
      picSportChosen: this.props.picSport,
      idSport: this.props.idSport,
      allSports: this.props.allSports,
      arrondissement: "",
      handicapMobility: false,
      handicapSensory: false,
      level: false
    }
  }

  arrondissementClicked(item){
    this.setState({
      arrondissement: item.nbArrondissement
    })
  }

  render(){
    return(
      <div>

        <ParisMap arrondissementClicked={this.arrondissementClicked.bind(this)} />
        <Popup sport={this.state.chosenSport} picSport={this.state.picSportChosen} idSport={this.state.idSport}  arrondissement={this.state.arrondissement} allSports={this.state.allSports} />
      </div>
    )
  }
}

export default Content;