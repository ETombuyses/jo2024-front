import React from 'react';
import basketball from '../assets/img/Basketball.svg';


class ChosenSport extends React.Component {
    constructor() {
      super();
      this.state = {
        arrondissement: "1er Arrondissement",
        chosenSport: "Basketball",



    }
    }
    render() {
      return <div className="favoriteSportWrapper">
                <div className="favoriteSportIconAndTitleWrapper">
                    <img src={basketball} alt="" className="favoriteSportIcon"/>
                    <span>{this.state.chosenSport}</span>
                </div>
                <div className="Gauge"></div>
                <div className="GaugeValueWrapper">
                    <span className="GaugeValue">40</span>
                </div>
             </div>
    }
  }

  export default ChosenSport;
