import React, { Component } from 'react';
import CalendarContext from './CalendarContext'
import './calendar.css';

class DayCalendar extends Component{
  constructor(props){
    super(props);
    this.state = {
      txt: this.props.text
    }
  }

  onClick(){
    let txtDate = this.state.txt;
    this.props.test({
      title: txtDate,
    })
  }
  render(){
    return(
      <div>
        <CalendarContext.Provider value="[{ name:'Priou' }, { name:'Masselot' }]" />
        <p onClick={this.onClick.bind(this)} className='popupDate__single'>{this.props.text}</p>
      </div>
    )
  }
}

export default DayCalendar;