import React from 'react';
import basketball from '../assets/img/Basketball.svg';


class Sport extends React.Component {
    constructor() {
      super();
      this.state = {
    }
    }
    render() {
      return <div className="SportWrapper">
                <div className="SportIconAndTitleWrapper">
                    <img src={basketball} alt="" className="SportIcon"/>
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
