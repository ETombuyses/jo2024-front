import React, { Component } from 'react';
import Sport from './Sport';

class ChosenSport extends Component{
  constructor(props){
    super(props)
    this.state = {
      idSportChosen: this.props.idSport
    }
  }

  onClick(sport){
    this.props.changePage({
      idSport: sport.idSport,
      nameSport: sport.nameSport,
      picSport: sport.picSport
    })
  }

  render(){
    return(
      <div>
        <h4>Épreuve choisie</h4>
        <Sport name={this.props.nameSport} pic={this.props.namePic} id={this.state.idSportChosen} changePage={this.onClick.bind(this)} arrondissement={this.props.arrodissement} />
      </div>
    )
  }
}

export default ChosenSport;