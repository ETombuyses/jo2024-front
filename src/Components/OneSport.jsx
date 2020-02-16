import React, { Component } from 'react';

class OneSport extends Component{

  onClick(){
    this.props.onClick({
      sport: this.props.nameSport,
    })
  }

  render(){
    return(
      <div onClick={this.onClick.bind(this)}>
        <img src={this.props.srcImage} alt="Image du sport"/>
        <h3>{this.props.nameSport}</h3>
      </div>
    )
  }
}

export default OneSport;