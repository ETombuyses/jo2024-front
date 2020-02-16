import React from "react";
import Landing from "./Landing";
import Popup from "./Popup";

class MyApp extends React.Component {
  constructor() {
    super();
    this.state = {
      page: 1,
      sport: ""
    };
  }

  //Fonction qui va changer le state "sport" et qui va faire apparaître le component Popup
  switchPages(sport) {
    this.setState({
      sport: sport.sport,
      page: 2
    })
  }

  render() {
    return (
      this.state.page === 1 ?
      <Landing onClick={this.switchPages.bind(this)} /> :
      <Popup sport={this.state.sport} />
    );
  }
}

export default MyApp;