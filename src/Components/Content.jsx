import React, { Component } from 'react';
import Popup from './Popup';
import ParisMap from './ParisMap';
import ChoseDate from './ChoseDate';

class Content extends Component{

  constructor(props){
    super(props)
    this.state = {
      chosenSport: this.props.chosenSport,
      picSportChosen: this.props.picSport,
      idSport: this.props.idSport,
      allSports: this.props.allSports,
      arrondissement: '',
      handicapMobility: false,
      handicapSensory: false,
      level: false,
      idSportChosen: '',
      removeSportChosen: true,
    }
  }

  arrondissementClicked(item){
    this.setState({
      arrondissement: item.nbArrondissement
    })
  }

  idSport(sport){
    this.setState({
      idSportChosen: sport.id,
      removeSportChosen: false
    })
  }

  removeSportChosen(){
    this.setState({
      removeSportChosen: true
    })
  }

  changeAllSport(value){
    this.setState({
      allSports: value.allSport
    })
  }

  onClick(sport){
    this.setState({
      chosenSport: sport.sport,
      picSportChosen: sport.picSport,
      idSport: sport.idSport
    })
  }

  render(){
    return(
      <div>
        <ParisMap arrondissementClicked={this.arrondissementClicked.bind(this)} idSport={this.state.idSportChosen} removeSportChosen={this.state.removeSportChosen} />
        {this.state.allSports === true ? '' : <ChoseDate inContent={true} onClick={this.onClick.bind(this)} />}
        <Popup sport={this.state.chosenSport} picSport={this.state.picSportChosen} idSport={this.state.idSport}  arrondissement={this.state.arrondissement} allSports={this.state.allSports} onClick={this.idSport.bind(this)} removeSportChosen={this.removeSportChosen.bind(this)} changeAllSport={this.changeAllSport.bind(this)} />
      </div>
    )
  }
}

export default Content;