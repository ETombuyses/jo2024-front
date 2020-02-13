import React from "react";
import Basketball from "../assets/img/Basketball.svg";
import Sport from "../Components/Sport";
import Adress from "../Components/Adress";
/*import Filters from "../Components/Filters";*/

class Popup extends React.Component {
  constructor() {
    super();
    this.state = {
      otherSports: ['Basketball','Basketball','Basketball','Basketball','Basketball'],
      chosenSport: "Basketball",
      SportChoisi: false
    };
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
        <div>
        <h3>Liste des etablissements :</h3>
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

        <div className="currentSportSection">
          <div className="currentSportWrapper">
              <img src={Basketball} alt="Sport" />
            <h3>{this.state.chosenSport}</h3>
          </div>
        </div>
        {this.displaySportsOrBuildings()}
        
      </div>
    );
  }
}

export default Popup;
