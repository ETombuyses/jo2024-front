import React, { Component } from 'react';
import Sport from './Sport';

class SimilarSports extends Component{
  constructor(props){
    super(props)
    this.state = {
      idSportChosen: this.props.idSport,
      data: []
    }
  }

  //Fonction qui fait une requete vers l'API puis met les données dans la variable data dans le state
  async componentDidMount() {
    const response = await fetch(`http://127.0.0.1:8080/sport/list/selected/practice/${this.state.idSportChosen}/false/false/false`);
    const json = await response.json();
    this.setState({ data: json.otherFamilies })
  }

  render(){
    return(
      <div>
        <p>Épreuves similaires</p>
        {this.state.data.map(similarSport => (
          <Sport name={similarSport.practice} pic={similarSport.image} value="20" />
        ))}
      </div>
    )
  }
}

export default SimilarSports;