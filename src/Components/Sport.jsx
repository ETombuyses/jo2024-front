import React from "react";
import basketball from "../assets/img/Basketball.svg";

class Sport extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div>
        <div className="sportWrapper" onClick={this.props.onClick}>
          <img src={require(`../assets/img/${this.props.image}.svg`)} />
          <div className="gaugeWrapper">
            <div className="Gauge"></div>
          </div>
          <h4 className="gaugeValue">{this.props.value}</h4>
        </div>
        <h5 className="sportName">{this.props.name}</h5>

        <h4 className="otherSportsHead">Tous les sports similaires :</h4>
      </div>
    );
  }
}

export default Sport;
