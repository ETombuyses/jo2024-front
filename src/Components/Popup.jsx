import React, { Component } from "react";
import ChosenSport from "./ChosenSport";
import SimilarSports from "./SimilarSports";
import AllSports from "./AllSports";
import Adress from "./Adress";
import AccessibiliteSingle from "./AccessibiliteSingle";
import FilterSingle from "./FilterSingle";

class Popup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 1,
      idSport: '',
      nameSport: '',
      picSport: '',
      arrondissement: this.props.arrondissement,
      handicapMobility: false,
      handicapSensory: false,
      level: false, 
      allSport: this.props.allSports
    }
  }

  changePage(sport) {
    this.setState({
      idSport: sport.idSport,
      nameSport: sport.nameSport,
      picSport: sport.picSport,
      page: 2
    });
    this.props.onClick({
      id: sport.idSport
    })
  }

  changePageOther(){
    this.setState({
      page: 1
    })
    this.props.removeSportChosen()
  }

  changeHandicapSensory(){
    this.setState({
      handicapSensory: !this.state.handicapSensory
    })
  }

  changeHandicapMobility(){
    this.setState({
      handicapMobility: !this.state.handicapMobility
    })
  }

  changeLevel(filter){
    if(filter.slug === this.state.level){
      this.setState({
        level: false
      })
    } else {
      this.setState({
        level: filter.slug
      })
    }
  }

  switchEpreuve(){
    this.setState({
      allSport: false
    })
    this.props.changeAllSport({
      allSport: false
    })
  }

  switchAll(){
    this.setState({
      allSport: true
    })
    this.props.changeAllSport({
      allSport: true
    })
  }

  render() {
    return (
      <div className="popup">
        <div className="popup__content">
          {this.state.page === 1 ? (
            <div>
              <div className="popup__header">
                <button style={{background: this.state.allSport === true ? '#E3E3E3' : '#fff'}} onClick={this.switchEpreuve.bind(this)}>Épreuves du jour</button>
                <button style={{background: this.state.allSport === true ? '#fff' : '#E3E3E3'}} onClick={this.switchAll.bind(this)}>Tous les sports</button>
              </div>
              <div className="popup__transition"></div>
              <div className="popup__main">
                {this.state.allSport === true ? (
                  <AllSports
                    arrondissement={this.props.arrondissement}
                    handicapSensory={this.state.handicapSensory}
                    handicapMobility={this.state.handicapMobility}
                    level={this.state.level}
                    changePage={this.changePage.bind(this)}
                  />
                ) : (
                  this.props.idSport === '' ? 
                  <div className="popup__noSport">
                    <p>Aucun sport n'a été selectionné</p>
                  </div> :
                  <div>
                    <ChosenSport
                      nameSport={this.props.sport}
                      namePic={this.props.picSport}
                      idSport={this.props.idSport}
                      arrondissement={this.props.arrondissement}
                      handicapSensory={this.state.handicapSensory}
                      handicapMobility={this.state.handicapMobility}
                      level={this.state.level}
                      changePage={this.changePage.bind(this)}
                    />
                    <SimilarSports
                      idSport={this.props.idSport}
                      arrondissement={this.props.arrondissement}
                      handicapSensory={this.state.handicapSensory}
                      handicapMobility={this.state.handicapMobility}
                      level={this.state.level}
                      changePage={this.changePage.bind(this)}
                    />
                  </div>
                )}
              </div>
            </div>) :
          <Adress pic={this.state.picSport} name={this.state.nameSport} id={this.state.idSport} changePageOther={this.changePageOther.bind(this)} arrondissement={this.props.arrondissement} handicapMobility={this.state.handicapMobility} handicapSensory={this.state.handicapSensory} level={this.state.level} />
          }
          <div className="popup__footer">
            <div className="popupFooter__accessibilite">
              <h5 className="popupFooter__accessibiliteTitle">Accessibilité</h5>
              <div className="popupFooter__accessibilites">
                <AccessibiliteSingle isClicked={this.state.handicapSensory === true ? true : false} pic="sensoriel" name="Handicap sensoriel" onClick={this.changeHandicapSensory.bind(this)} />
                <AccessibiliteSingle isClicked={this.state.handicapMobility === true ? true : false} pic="handicap" name="Mobilité réduite" onClick={this.changeHandicapMobility.bind(this)} />
              </div>
            </div>
            <div className="popupFooter__filters">
              <FilterSingle isClicked={this.state.level === 'Loisir' ? true : false} name="LOISIR" slug="Loisir" onClick={this.changeLevel.bind(this)} />
              <FilterSingle isClicked={this.state.level === 'Scolaire' ? true : false} name="SCOLAIRE" slug="Scolaire" onClick={this.changeLevel.bind(this)} />
              <FilterSingle isClicked={this.state.level === 'Entrainement' ? true : false} name="ENTRAINEMENT" slug="Entrainement" onClick={this.changeLevel.bind(this)} />
              <FilterSingle isClicked={this.state.level === 'Compétition' ? true : false} name="COMPÉTITION" slug="Compétition" onClick={this.changeLevel.bind(this)} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Popup;
