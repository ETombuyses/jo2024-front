import React, { Component } from "react";
import Sport from "./Sport";

class SimilarSports extends Component {
  constructor(props) {
    super(props);
    this.state = {
      idSportChosen: this.props.idSport,
      idSportSimilar: "",
      data: [],
      adress: []
    };
  }

  //Fonction qui fait une requete vers l'API puis met les données dans la variable data dans le state
  async componentDidMount() {
    const response = await fetch(
      `http://127.0.0.1:8080/selected-sport/${this.state.idSportChosen}/false/false/false`
    );
    const json = await response.json();
    this.setState({ data: json.otherFamilies });
  }

  componentDidUpdate(){
    if(this.props.idSport !== this.state.idSportChosen){
      this.setState({
        idSportChosen: this.props.idSport
      }, ()=>{
        this.componentDidMount()
      })
    }
  }

  onClick(sport) {
    this.props.changePage({
      idSport: sport.idSport,
      nameSport: sport.nameSport,
      picSport: sport.picSport
    });
  }

  render() {
    return (
      <div className="similarSports">
        <h4>Sports similaires</h4>
        {this.state.data.map(similarSport => (
          <Sport key={similarSport.id} name={similarSport.practice} pic={similarSport.image} id={similarSport.id} changePage={this.onClick.bind(this)} arrondissement={this.props.arrondissement} handicapSensory={this.props.handicapSensory} handicapMobility={this.props.handicapMobility} level={this.props.level} />
        ))}
      </div>
    );
  }
}

export default SimilarSports;
