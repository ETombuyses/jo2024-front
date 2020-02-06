import React from 'react';
import basketball from '../assets/img/Basketball.svg';


class Sport extends React.Component {
    constructor() {
      super();
      this.state = {
    }
    }
    render() {
      return <div className="favoriteSportWrapper">
                <div className="favoriteSportIconAndTitleWrapper">
                    <img src={basketball} alt="" className="favoriteSportIcon"/>
                    <span>{this.props.name}</span>
                </div>
                <div className="Gauge"></div>
                <div className="GaugeValueWrapper">
                    <span className="GaugeValue">{this.props.amount}</span>
                </div>
             </div>
    }
  }

  export default Sport;
