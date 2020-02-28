import React, { Component } from 'react';
import DayCalendar from './DayCalendar';

class Calendar extends Component{

  constructor(props){
    super(props)
    this.state = {
      days: ["Lun.", "Mar.", "Mer.", "Jeu.", "Ven.", "Sam.", "Dim."],
      daysRow1: [
        ["26", "07"],
        ["27", "07"],
        ["28", "07"]
      ],
      daysRow2: [
        ["29", "07"],
        ["30", "07"],
        ["31", "07"],
        ["1", "08"],
        ["2", "08"],
        ["3", "08"],
        ["4", "08"]
      ],
      daysRow3: [
        ["5", "08"],
        ["6", "08"],
        ["7", "08"],
        ["8", "08"],
        ["9", "08"],
        ["10", "08"],
        ["11", "08"]
      ]
    }
  }

  onNewDate(date){
    this.props.onNewDate({
      day: date.day,
      month: date.month
    })
  }

  render(){
    return(
      <div className='date__popupDate popupDate'>
        <div className='popupDate__inner'>
          <h5 className='popupDate__title'>Juillet - Août</h5>
          <button className='popupDate__close' onClick={this.props.closePopup}>Fermer</button>
          <div className='popupDate__days'>
            {this.state.days.map((day, i) => {
              return <div key={i}><p>{day}</p></div>
            })}
          </div>
          <div className='popupDate__date popupDate__date--1'>
            {this.state.daysRow1.map((day, i) => {
              return <DayCalendar isChosen={this.props.dayDate === day[0] ? true : false} key={i} text={day[0]} month={day[1]} onNewDate={this.onNewDate.bind(this)} />
            })}
          </div>
          <div className='popupDate__date popupDate__date--2'>
            {this.state.daysRow2.map((day, i) => {
              return <DayCalendar isChosen={this.props.dayDate === day[0] ? true : false} key={i} text={day[0]} month={day[1]} onNewDate={this.onNewDate.bind(this)} />
            })}
          </div>
          <div className='popupDate__date popupDate__date--3'>
            {this.state.daysRow3.map((day, i) => {
              return <DayCalendar isChosen={this.props.dayDate === day[0] ? true : false} key={i} text={day[0]} month={day[1]} onNewDate={this.onNewDate.bind(this)} />
            })}
          </div>
        </div>
      </div>
    )
  }
}

export default Calendar;