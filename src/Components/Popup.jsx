import React from 'react';
import basketball from '../assets/img/Basketball.svg';
import ChosenSport from '../Components/ChosenSport';

class Popup extends React.Component {
    constructor() {
      super();
      this.state = {
          arrondissement: "1er Arrondissement",
          chosenSport: "Basketball",



      }
    }
    render() {
      return <div className="popup">
        <p className="Arrondissement">{this.state.arrondissement}</p>
        <div className="currentOlympicWrapper">
          <div className="currentOlympic">
              <img src={basketball} alt="Epreuve en cours" className="currentOlympicSport"/>
          </div>
          <p className="currentOlympicDescription">Epreuve olympique<br/>
            BasketBall - Olympia de Paris</p>
        </div>
        <h2 className="buildingsHead">Etablissements pour la pratique choisie : </h2>
        <ChosenSport></ChosenSport>
      </div>
    }
  }

  export default Popup;