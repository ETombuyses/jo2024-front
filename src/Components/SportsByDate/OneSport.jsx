import React, { Component } from 'react';

class OneSport extends Component{
  render(){
    return(
      <div>
        <img src={this.props.srcImage} alt="Image du sport"/>
        <h3>{this.props.nameSport}</h3>
      </div>
    )
  }
}

export default OneSport;