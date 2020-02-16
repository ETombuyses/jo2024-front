import React, { Component } from 'react';

class OneSport extends Component{

  onClick(){
    this.props.onClick({
      sport: this.props.nameSport,
    })
  }

  render(){
    return(
      <div onClick={this.onClick.bind(this)} className="OneSport">
        <img src={require(`../assets/icon-sport/${this.props.srcImage}.svg`)} alt="Image du sport"/>
        <h3>{this.props.nameSport}</h3>
      </div>
    )
  }
}

export default OneSport;