import React from "react";
import Basketball from "../assets/icon/Basketball.svg";
import Sport from "./Sport";
import Adress from "./Adress";

class Popup extends React.Component {
  constructor() {
    super();
    this.state = {
      otherSports: ['Basketball','Basketball','Basketball','Basketball','Basketball'],
      chosenSport: "Basketball",
      SportChoisi: false,
      similarSports: [
        {
          name: "Football",
          image: "football",
        }
      ]
    };
  }

  //Fonction qui fait une requete vers l'API puis met les données dans la variable data dans le state
  async componentDidMount() {
    const response = await fetch(`http://127.0.0.1:8080/olympiceventsbydate/2024-${this.state.monthDate}-${this.state.dayDate}`);
    const json = await response.json();
    this.setState({ data: json })
  }

  switchDisplay() {
    if (this.state.SportChoisi === true) {
      this.setState({ SportChoisi: false });
    } else {
      this.setState({ SportChoisi: true });
      console.log(this.state.SportChoisi)
    }
  }
  displaySports() {
    return this.state.otherSports.map(Sports => (
      <Sport
        name={Sports}
        image={Sports}
        value="40"
        onClick={()=>{this.switchDisplay()}}
      ></Sport>
    ));
  }

  displaySportsOrBuildings(){
    if (this.state.SportChoisi === false) {
      return(
        <div className="forreturn">
          <div className="sportsSectionTop">
            <span>Établissements</span>
          </div>
          <section className="sportsSection">
            <Sport name={this.state.chosenSport} image={this.state.chosenSport} value="10" onClick={()=>{this.switchDisplay()}}></Sport>
            <h4 className="otherSportsHead">Tous les sports similaires :</h4>
            {this.displaySports()}
          </section>
        </div>
      )
    }else{
      return(
        <div className="forreturn">
          <span className="returnArrow" onClick={()=>{this.switchDisplay()}}>Retour</span>
          <h3 className="addressHead">Liste des etablissements :</h3>
          <div className="addressSection">
          <Adress name="Centre Sportif Paul Valéry" adress="32 Rue Stéphanie, 75008 Paris"></Adress>
          <Adress name="Centre Sportif Paul Valéry" adress="32 Rue Stéphanie, 75008 Paris"></Adress>
          <Adress name="Centre Sportif Paul Valéry" adress="32 Rue Stéphanie, 75008 Paris"></Adress>
          <Adress name="Centre Sportif Paul Valéry" adress="32 Rue Stéphanie, 75008 Paris"></Adress>
          <Adress name="Centre Sportif Paul Valéry" adress="32 Rue Stéphanie, 75008 Paris"></Adress>
          <Adress name="Centre Sportif Paul Valéry" adress="32 Rue Stéphanie, 75008 Paris"></Adress>
          <Adress name="Centre Sportif Paul Valéry" adress="32 Rue Stéphanie, 75008 Paris"></Adress>
          <Adress name="Centre Sportif Paul Valéry" adress="32 Rue Stéphanie, 75008 Paris"></Adress>
          <Adress name="Centre Sportif Paul Valéry" adress="32 Rue Stéphanie, 75008 Paris"></Adress>
          <Adress name="Centre Sportif Paul Valéry" adress="32 Rue Stéphanie, 75008 Paris"></Adress>
          </div>
        </div>
      )
    }
  }

  render() {
    return (
      <div className="popup">
        <header className="popupHeader">
          <button className="headerButton firstButton">Épreuves du jour</button>
          <button className="headerButton secondButton">Tous les sports</button>
        </header>
        {this.displaySportsOrBuildings()}
      </div>
    );
  }
}

export default Popup;
