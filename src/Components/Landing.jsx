import React, { Component } from "react";
import calendrier from "../assets/icon/calendrier.svg";
import OneSport from "./OneSport";
import Calendar from './Calendar';
import ChoseDate from './ChoseDate';


class Landing extends Component {

  //Fonction qui va envoyer le nom du sport cliqué dans la props onClick du component Landing
  onClick(sport){
    this.props.onClick({
      sport: sport.sport,
      picSport: sport.picSport,
      idSport: sport.idSport
    })
  }

  allSports(sport){
    this.props.onClick({
      allSports : true
    })
  }

  render() {
    return (
      <div className="landingBody">
        <div className="landing__logo">
          <img src={require(`../assets/icon/logo.svg`)} alt="Logo Olymparis" />
        </div>
        <h1 className="landingMainTitle">Participez vous aussi aux Jeux Olympiques</h1>
        <h3 className="landingSubTitle">Trouvez un établissement sportif adapté à votre profil en fonction du sport olympique de votre choix</h3>
        <ChoseDate onClick={this.onClick.bind(this)} />
        <div className="seeMore" onClick={this.allSports.bind(this)}>
          <h4>Voir tous les sports</h4>
        </div>
      </div>
    );
  }
}

export default Landing;
