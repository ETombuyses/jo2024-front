import React from 'react';
import FauteuilRoulant from "../assets/img/FauteuilRoulant.svg";
import HandicapSensoriel from "../assets/img/HandicapSensoriel.svg";


class Filters extends React.Component{
    constructor(){
        super();

    }
    render() {
        return (
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
        )
    }
}

export default Filters;
