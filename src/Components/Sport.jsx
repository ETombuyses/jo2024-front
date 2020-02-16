import React from "react";

class Sport extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div>
        <div className="sportWrapper" onClick={this.props.onClick}>
          <img src={require(`../assets/img/${this.props.name}.svg`)} />
          <div className="gaugeWrapper">
            <div className="Gauge"></div>
          </div>
          <h4 className="gaugeValue">{this.props.value}</h4>
        </div>
        <h5 className="sportName">{this.props.name}</h5>

      </div>
    );
  }
}

export default Sport;
