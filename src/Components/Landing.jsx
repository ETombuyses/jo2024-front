import React from 'react';
import CurrentSport from '../Components/CurrentSport';
import Calendrier from '../assets/img/Calendrier.svg';
import Button from '../assets/img/Button.svg';

class Landing extends React.Component{
  constructor(){
      super();
      this.state = {
      Sports: ['Football','Gymnastique','Natation'],
      Images: ['../assets/img/Football.svg', '../assets/img/'],
      Today: {
        Day: "1",
        Month: "Août",
      }
      }

  }
  displaySports(){
    return (
    this.state.Sports.map((Sports) => 
      <CurrentSport name={Sports} image={this.state.Images[0]} onClick={this.props.onClick}></CurrentSport>
      )
    )
  }


  render(){
    return (
      <div className="landingBody">
        <h1 className="landingMainTitle">Où faire du sport à Paris ?</h1>
        <h3 className="landingSubTitle">Trouver l’établissement parfait pour pratiquer un des sports du jour</h3>
        <p className="landingDate">
          <span>{this.state.Today.Day} </span>
          <span>{this.state.Today.Month} 2024 </span>
          <img src={Calendrier} alt="Calendrier"/>
        </p>
        <h3 className="landingTodayOlympicsTitle">Épreuves olympiques du jour</h3>
        <section className="todayOlympicsWrapper">
          {this.displaySports()}
        </section>
        <h3 className="seeMoreTitle">Voir plus de sports</h3>
        <div className="buttonWrapper">
        <img src={Button} alt="Button" className="Button" onClick={this.props.onClick}/>
        </div>
      </div>
    )
  }
}

export default Landing;