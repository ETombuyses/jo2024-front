import React, { Component } from 'react';
import Sport from './Sport';

class ChosenSport extends Component{

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
        <div className="chosenSport__title">
          <h4>Épreuve choisie</h4>
          <h5>Nombre d'établissements</h5>
        </div>
        <Sport name={this.props.nameSport} pic={this.props.namePic} id={this.props.idSport} changePage={this.onClick.bind(this)} arrondissement={this.props.arrondissement} handicapSensory={this.props.handicapSensory} handicapMobility={this.props.handicapMobility} level={this.props.level} />
      </div>
    )
  }
}

export default ChosenSport;