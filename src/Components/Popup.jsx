import React from "react";
import basketball from "../assets/img/Basketball.svg";
import Sport from "../Components/Sport";
import Adress from "../Components/Adress";
/*import Filters from "../Components/Filters";*/

class Popup extends React.Component {
  constructor() {
    super();
    this.state = {
      arrondissement: "1er Arrondissement",
      Sport: "Basketball",
      CategorieChoisie: "Sport de ballons",
      SportChoisi: false,
      ClickedSport: "Basketball"
    };
  }

  switchDisplay(){
    if (this.state.SportChoisi === true) {
      this.setState({SportChoisi: false})
    }else{
    this.setState({SportChoisi: true});
   }
  }

  displaySportsOrPlaces() {
    if (this.state.SportChoisi === false) {
      return (
        <div className="forreturn">
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
            <h2 className="buildingsHead">{this.state.CategorieChoisie} :</h2>
            <Sport name="Basketball" amount="40" onClick={()=>{{this.switchDisplay()}}} ></Sport>
            <Sport name="Football" amount="30" onClick={()=>{{this.switchDisplay()}}}></Sport>
            <h3 className="otherSportsHead">Autres sports :</h3>
            <Sport name="Jogging" amount="20" onClick={()=>{{this.switchDisplay()}}}></Sport>
            <Sport name="Skateboard" amount="48" onClick={()=>{{this.switchDisplay()}}}></Sport>
            <Sport name="Tennis" amount="8" onClick={()=>{{this.switchDisplay()}}}></Sport>
            <Sport name="Saut en longueur" amount="1" onClick={()=>{{this.switchDisplay()}}}></Sport>
          </div>
        </div>
      );
    } else {
      return (
        <div className="forreturn">
          <span className="return" onClick={()=>{{this.switchDisplay()}}}>Retour</span>
          <div className="selectedSport">
            <img src={basketball} alt=""/>
            <h3>{this.state.ClickedSport}</h3>
          </div>
          <h2 className="buildingsHead">Liste des établissements :</h2>
          <div className="buildingsSection">
            <Adress name="Gymnase du pérou" adress="78 rue Saint-Denis"></Adress>
            <Adress name="Gymnase du pérou" adress="78 rue Saint-Denis"></Adress>
          </div>
        </div>
      )
    }
  }

  render() {
    return (
      <div className="popup">
        {/*<p className="Arrondissement">{this.state.arrondissement}</p>*/}

        {this.displaySportsOrPlaces()}

      </div>
    );
  }
}

export default Popup;
