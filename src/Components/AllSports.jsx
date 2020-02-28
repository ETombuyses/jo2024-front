import React, { Component } from 'react';
import Sport from './Sport';

class AllSports extends Component{
  constructor(props){
    super(props)
    this.state = {
      data: []
    }
  }

  async componentDidMount() {
    const response = await fetch(`http://127.0.0.1:8080/all-olympic-sports/false/false/false`);
    const json = await response.json();
    this.setState({ data: json })
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
        <div className="chosenSport__title">
          <h4>Tous les sports</h4>
          <h5>Nombre d'établissements</h5>
        </div>
        {this.state.data.map(sport => (
          <Sport key={sport.id} name={sport.practice} pic={sport.image} id={sport.id} changePage={this.onClick.bind(this)} arrondissement={this.props.arrondissement} handicapSensory={this.props.handicapSensory} handicapMobility={this.props.handicapMobility} level={this.props.level} />
        ))}
      </div>
    )
  }
}

export default AllSports;