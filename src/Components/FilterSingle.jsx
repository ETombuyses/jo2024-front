import React, { Component } from 'react';

class FilterSingle extends Component{

  onClick(){
    this.props.onClick({
      slug: this.props.slug
    })
  }

  render(){
    return(
      <div class={this.props.isClicked === true ? 'filterSingle is-clicked' : 'filterSingle'} onClick={this.onClick.bind(this)}>
        <h5>{this.props.name}</h5>
      </div>
    )
  }
}

export default FilterSingle;