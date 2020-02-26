import React, { Component } from "react";
import ChosenSport from "./ChosenSport";
import SimilarSports from "./SimilarSports";
import AllSports from "./AllSports";
import Adress from "./Adress";
import AccessibiliteSingle from "./AccessibiliteSingle";

class Popup extends Component {

  constructor(props){
    super(props)
    this.state = {
      page: 1,
      idSport: '',
      nameSport: '',
      picSport: '',
      arrondissement: this.props.arrondissement
    }
  }

  changePage(sport){
    this.setState({
      idSport: sport.idSport,
      nameSport: sport.nameSport,
      picSport: sport.picSport,
      page: 2
    })
  }

  changePageOther(){
    this.setState({
      page: 1
    })
  }

  render() {
    return (
      <div className="popup">
        <div className="popup__content">
          {this.state.page === 1 ?
          <div>
            <div className="popup__header">
              <button>Épreuves du jour</button>
              <button>Tous les sports</button>
            </div>
            <div className="popup__main">
              {this.props.arrondissement}
              {this.props.allSports === true ?
              <AllSports arrondissement={this.props.arrondissement} changePage={this.changePage.bind(this)} /> :
              <div>
                <ChosenSport nameSport={this.props.sport} namePic={this.props.picSport} idSport={this.props.idSport} arrondissement={this.props.arrondissement} changePage={this.changePage.bind(this)} />
                <SimilarSports idSport={this.props.idSport} arrondissement={this.props.arrondissement} changePage={this.changePage.bind(this)} />
              </div>
              }
            </div>
          </div> :
          <Adress pic={this.state.picSport} name={this.state.nameSport} id={this.state.idSport} changePageOther={this.changePageOther.bind(this)} arrondissement={this.props.arrondissement} />
          }
          <div className="popup__footer">
            <div className="popupFooter__accessibilite">
              <h5>Accessibilité</h5>
              <div className="popupFooter__accessibilites">
                <AccessibiliteSingle />
                <AccessibiliteSingle />
              </div>
            </div>
            <div className="popupFooter__filters">
              <div>
                <h5>LOISIR</h5>
              </div>
              <div>
                <h5>SCOLAIRE</h5>
              </div>
              <div>
                <h5>ENTRAINEMENT</h5>
              </div>
              <div>
                <h5>COMPÉTITION</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Popup;
