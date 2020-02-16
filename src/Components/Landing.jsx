import React, { Component } from "react";
import Calendrier from "../assets/img/Calendrier.svg";
import OneSport from "./OneSport";
import Calendar from './Calendar';


class Landing extends Component {
  constructor(props) {
    super(props);
    this.state = {
      SportSelected: "",
      showPopup: false,
      dayDate: "26",
      monthDate: "07",
      data: []
     };
  };

  async componentDidMount() {
    const response = await fetch(`http://127.0.0.1:8080/olympiceventsbydate/2024-${this.state.monthDate}-${this.state.dayDate}`);
    const json = await response.json();
    this.setState({ data: json })
  }

  test2(item){
    this.setState({ 
      dayDate: item.title2,
      monthDate: item.mnth2
     })
  }

  togglePopup() {
    this.setState({
      showPopup: !this.state.showPopup
    });
  }

  onClick(sport){
    this.props.onClick({
      sport: sport.sport
    })
  }

  render() {
    return (
      <div className="landingBody">
        <h1 className="landingMainTitle">Où faire du sport à Paris ?</h1>
        <h3 className="landingSubTitle">
          Trouver l’établissement parfait pour pratiquer un des sports du jour
        </h3>
        <div className="landingDate">
          <p onClick={this.togglePopup.bind(this)}>
            {this.state.dayDate} {this.state.monthDate === "07" ? "juillet" : "août"} 2024
          </p>
          <img src={Calendrier} alt="Calendrier" />
        </div>
        {this.state.showPopup ?
          <Calendar
            test2={this.test2.bind(this)}
            closePopup={this.togglePopup.bind(this)} /> :
            null
        }
        <h3 className="landingTodayOlympicsTitle">
          Épreuves olympiques du jour
        </h3>
        <section className="todayOlympicsWrapper">
          {this.state.data.map(sport => (
            <OneSport key={sport.image_name} nameSport={sport.practice} srcImage={sport.image_name} onClick={this.onClick.bind(this)} />
          ))}
        </section>
        <h3 className="seeMoreTitle" onClick={this.props.onClick}>Voir plus de sports</h3>
      </div>
    );
  }
}

export default Landing;
