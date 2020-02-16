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