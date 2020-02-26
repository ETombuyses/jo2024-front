import React, { Component } from 'react';

class AdressSingle extends Component{
  render(){
    return(
      <div className="adressSingle">
        <p>{this.props.name}<br></br>{this.props.number} {this.props.nameAdress}, {this.props.code} Paris</p>
      </div>
    )
  }
}

export default AdressSingle;