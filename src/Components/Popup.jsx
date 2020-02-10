import React from "react";
import basketball from "../assets/img/Basketball.svg";
import Sport from "../Components/Sport";
import FauteuilRoulant from "../assets/img/FauteuilRoulant.svg";
import HandicapSensoriel from "../assets/img/HandicapSensoriel.svg";

class Popup extends React.Component {
  constructor() {
    super();
    this.state = {
      arrondissement: "1er Arrondissement",
      Sport: "Basketball",
      CategorieChoisie: "Sport de ballons :",
      SportChoisi: false
    };
  }

  switchDisplay(){
    this.setState({SportChoisi: true});
    console.log(this.state.SportChoisie)
   }

  displaySportsOrPlaces() {
    if (this.state.SportChoisi === false) {
      return (
        <div>
        <p className="Arrondissement">{this.state.arrondissement}</p>
        <div className="currentOlympicWrapper">
          <div className="currentOlympic">
            <img src={basketball} alt="Epreuve en cours" className="currentOlympicSport"/>
          </div>
          <p className="currentOlympicDescription">
            Epreuve olympique
            <br />
            BasketBall - Olympia de Paris
          </p>
        </div>
        <div className="buildingsSection">
          <h2 className="buildingsHead">{this.state.CategorieChoisie}</h2>
          <Sport name="Basketball" amount="40" onClick={()=>{{this.switchDisplay()}}} ></Sport>
          <Sport name="Football" amount="30" onClick={()=>{{this.switchDisplay()}}}></Sport>
          <h3 className="otherSportsHead onClick={()=>{{this.switchDisplay()}}}">Autres sports :</h3>
          <Sport name="Jogging" amount="20" onClick={()=>{{this.switchDisplay()}}}></Sport>
          <Sport name="Skateboard" amount="48" onClick={()=>{{this.switchDisplay()}}}></Sport>
          <Sport name="Tennis" amount="8" onClick={()=>{{this.switchDisplay()}}}></Sport>
          <Sport name="Saut en longueur" amount="1" onClick={()=>{{this.switchDisplay()}}}></Sport>
        </div>
        </div>
      );
    } else {
      return (
        <div className="buildingsSection">
          
        </div>
      )
    }
  }

  render() {
    return (
      <div className="popup">
        {this.displaySportsOrPlaces()}

        <div className="filtersSection">
          <h3>Filtrer les résultats</h3>
          <div className="filterSectionWrapperWrapper">
          <div className="filtersSectionWrapper">
            <div className="accesibilityFilters">
              <h4>Accéssibilité</h4>
              <div className="accesibilityFiltersWrapper">
                <div>
                  <img src={FauteuilRoulant} alt="Mobilité Réduite" />
                  <h5>Mobilité réduite</h5>
                </div>
                <div>
                  <img src={HandicapSensoriel} alt="Handicap Sensoriel" />
                  <h5>Handicap Sensoriel</h5>
                </div>
              </div>
            </div>
            <div className="typeOfSportsFilters">
              <h4>Type de pratique</h4>
              <div className="typesOfSports">
                <div className="typesOfSportsFirstWrapper">
                  <button>Loisir</button>
                  <button>Entrainement</button>
                </div>
                <div className="typesOfSportsSecondWrapper">
                  <button>Compétition</button>
                  <button>Scolaire</button>
                </div>
              </div>
            </div>
          </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Popup;
