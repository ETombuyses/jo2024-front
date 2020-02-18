import React, { Component } from "react";
import Calendrier from "../assets/icon/Calendrier.svg";
import OneSport from "./OneSport";
import Calendar from './Calendar';


class Landing extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showPopup: false,
      dayDate: "26",
      monthDate: "07",
      data: []
    };
  };

  //Fonction qui fait une requete vers l'API puis met les données dans la variable data dans le state
  async componentDidMount() {
    const response = await fetch(`http://127.0.0.1:8080/olympiceventsbydate/2024-${this.state.monthDate}-${this.state.dayDate}`);
    const json = await response.json();
    this.setState({ data: json })
    console.log(this.state.data)
  }

  //Fonction qui change les valeurs de dayDate et monthDate par rapport à la date sur laquelle on a cliqué dans le calendrier et fermer le calendrier
  onNewDate(date){
    this.setState(
      {
      dayDate: date.day,
      monthDate: date.month,
      showPopup: !this.state.showPopup
      },
      //Fonction de callback qui rappelle la fonction componentDidMount car les valeurs dayDate et monthDate ont changés
      ()=>{this.componentDidMount()}
     )
  }

  //Fonction qui permet de changer la variable qui fait que le calendrier est visible ou pas
  togglePopup() {
    this.setState({
      showPopup: !this.state.showPopup
    });
  }

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
        <h1 className="landingMainTitle">Participer aux jeux Olympiques</h1>
        <h3 className="landingSubTitle">Trouvez l’établissement parfait pour pratiquer un des sports du jour</h3>
        <div className="landingDate">
          <p onClick={this.togglePopup.bind(this)}>
            {this.state.dayDate} {this.state.monthDate === "07" ? "Juillet" : "Août"} 2024
          </p>
          <img src={Calendrier} alt="Calendrier" />
        </div>
        {this.state.showPopup ?
          <Calendar
            onNewDate={this.onNewDate.bind(this)}
            closePopup={this.togglePopup.bind(this)}
          /> :
          null
        }
        <h3 className="landingTodayOlympicsTitle">Épreuves olympiques du jour</h3>
        <section className="todayOlympicsWrapper">
          {this.state.data.map(sport => (
            <OneSport key={sport.image} nameSport={sport.practice} idSport={sport.id} srcImage={sport.image} onClick={this.onClick.bind(this)} />
          ))}
        </section>
        <div className="seeMore" onClick={this.allSports.bind(this)}>
          <h4>Voir plus de sports</h4>
        </div>
      </div>
    );
  }
}

export default Landing;
