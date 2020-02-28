import React, { Component } from 'react';

class OneSport extends Component{

  constructor(props){
    super(props)
    this.state = {
      idSport: this.props.idSport
    }
  }

  onClick(){
    this.props.onClick({
      sport: this.props.nameSport,
      picSport: this.props.srcImage,
      idSport: this.state.idSport
    })
  }

  render(){
    return(
      <div onClick={this.onClick.bind(this)} className="OneSport">
        <div>
          <img src={require(`../assets/icon-sport/${this.props.srcImage}-white.svg`)} alt="Image du sport"/>
        </div>
        <h3>{this.props.nameSport}</h3>
      </div>
    )
  }
}

export default OneSport;