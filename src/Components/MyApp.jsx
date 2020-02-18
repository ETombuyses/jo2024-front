import React from "react";
import Landing from "./Landing";
import Content from "./Content";

class MyApp extends React.Component {
  constructor() {
    super();
    this.state = {
      page: 1,
      sport: "",
      picSport: "",
      idSport: "",
      allSports: false
    };
  }

  //Fonction qui va changer le state "sport" et qui va faire apparaître le component Popup avec le sport choisi et ses sports similaires où changer le state allSports et afficher le Popup avec tous les sports des JO
  switchPages(sport) {
    sport.allSports ?
    this.setState({
      allSports : sport.allSports,
      sport: ""
    }) :
    this.setState({
      sport: sport.sport,
      picSport: sport.picSport,
      idSport: sport.idSport,
    });
    this.setState({
      page: 2
    });
  }

  render() {
    return (
      this.state.page === 1 ?
      <Landing onClick={this.switchPages.bind(this)} /> :
      <Content chosenSport={this.state.sport} picSport={this.state.picSport} idSport={this.state.idSport} allSports={this.state.allSports} />
    );
  }
}

export default MyApp;