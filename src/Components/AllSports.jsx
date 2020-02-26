import React, { Component } from 'react';
import Sport from './Sport';

class AllSports extends Component{
  constructor(props){
    super(props)
    this.state = {
      arrondissement: ''
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
        <h4>Tous les sports {this.state.arrondissement}</h4>
        {this.state.data.map(sport => (
          <Sport name={sport.practice} pic={sport.image} id={sport.id} changePage={this.onClick.bind(this)} arrondissement={this.props.arrodissement} />
        ))}
      </div>
    )
  }
}

export default AllSports;