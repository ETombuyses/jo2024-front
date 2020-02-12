import React from "react";
import Basketball from "../assets/img/Basketball.svg";
import Sport from "../Components/Sport";
import Adress from "../Components/Adress";
/*import Filters from "../Components/Filters";*/

class Popup extends React.Component {
  constructor() {
    super();
    this.state = {
      chosenSport: "Basketball"
    };
  }

  switchDisplay(){
    if (this.state.SportChoisi === true) {
      this.setState({SportChoisi: false})
    }else{
    this.setState({SportChoisi: true});
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
            <img src={Basketball} alt="Sport"/>
            <h3>{this.state.chosenSport}</h3>
          </div>
        </div>
        <div className="sportsSectionTop">
            <span>Établissements</span>
          </div>
        <section className="sportsSection">
          
          <Sport image={this.state.chosenSport}></Sport>
        </section>

      </div>
    );
  }
}

export default Popup;
