import React from "react";

class Adress extends React.Component {
  
  render() {
    return (
      <div className="addressWrapper">
        <h3>{this.props.name}</h3>
        <h3>{this.props.adress}</h3>
      </div>
    );
  }
}

export default Adress;