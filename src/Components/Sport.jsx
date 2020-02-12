import React from 'react';
import basketball from '../assets/img/Basketball.svg';


class Sport extends React.Component {
    constructor() {
      super();
      this.state = {
    }

    }
    
    render() {
      return <div className="SportWrapper" onClick={this.props.onClick}>
                <img src={require(`../assets/img/${this.props.image}.svg`)}/>
                <div className="Gauge"></div>
             </div>
    }
  }

  export default Sport;
