import React, { Component } from 'react';
import './calendar.css';

class DayCalendar extends Component{
  constructor(props){
    super(props);
    this.state = {
      txt: this.props.text,
      mnth: this.props.month
    }
  }

  onClick(){
    this.props.test({
      title: this.state.txt,
      month: this.state.mnth
    })
  }
  render(){
    return(
      <div>
        <p onClick={this.onClick.bind(this)} className='popupDate__single'>{this.props.text}</p>
      </div>
    )
  }
}

export default DayCalendar;