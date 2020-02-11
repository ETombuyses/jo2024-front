import React from 'react';
import CurrentSport from '../Components/CurrentSport'

class Landing extends React.Component{
  constructor(){
      super();
      this.state = {
      Sports: ['Football','Gymnastique','Natation'],
      Today: {
        Day: "1",
        Month: "Août",
      }
      }

  }
  displaySports(){
    let Sports = this.state.Sports.map((title) =>
    title
  );
  }


  render(){
    return (
      <div>
        <h1 className="landingMainTitle">Où faire du sport à Paris ?</h1>
        <h3 className="landingSubTitle">Trouver l’établissement parfait pour pratiquer un des sports du jour</h3>
        <p className="landingDate">
          <span>{this.state.Today.Day} </span>
          <span>{this.state.Today.Month} 2024</span>
        </p>
        <h3 className="landingTodayOlympicsTitle">Épreuves olympiques du jour</h3>
        <section className="todayOlympicsWrapper">
          {this.displaySports()}
        </section>
      </div>
    )
  }
}

export default Landing;