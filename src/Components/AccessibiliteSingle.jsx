import React, { Component } from 'react';

class AccessibiliteSingle extends Component{

  onClick(e){
    this.props.onClick()
  }

  render(){
    return(
      <div className={this.props.isClicked === true ? 'accessibiliteSingle is-clicked' : 'accessibiliteSingle'} onClick={this.onClick.bind(this)}>
        <div className="accessibiliteSingle__picture">
          <img src={require(`../assets/icon/${this.props.pic}.svg`)} alt="Icône"/>
        </div>
        <h5>{this.props.name}</h5>
      </div>
    )
  }
}

export default AccessibiliteSingle;