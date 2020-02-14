import React, { Component } from 'react';
import DayCalendar from './DayCalendar';
import './calendar.css'; 

class Calendar extends Component{
  render(){
    return(
      <div className='date__popupDate popupDate'>
        <div className='popupDate__inner'>
          <div className='popupDate__days'>
            <div>
              <p>Lun.</p>
            </div>
            <div>
              <p>Mar.</p>
            </div>
            <div>
              <p>Mer.</p>
            </div>
            <div>
              <p>Jeu.</p>
            </div>
            <div>
              <p>Ven.</p>
            </div>
            <div>
              <p>Sam.</p>
            </div>
            <div>
              <p>Dim.</p>
            </div>
          </div>
          <div className='popupDate__date popupDate__date--1'>
            <DayCalendar text="26" />
            <DayCalendar text="27" />
            <DayCalendar text="28" />
          </div>
          <div className='popupDate__date popupDate__date--2'>
            <DayCalendar text="29" />
            <DayCalendar text="30" />
            <DayCalendar text="31" />
            <DayCalendar text="1" />
            <DayCalendar text="2" />
            <DayCalendar text="3" />
            <DayCalendar text="4" />
          </div>
          <div className='popupDate__date popupDate__date--3'>
            <DayCalendar text="5" />
            <DayCalendar text="6" />
            <DayCalendar text="7" />
            <DayCalendar text="8" />
            <DayCalendar text="9" />
            <DayCalendar text="10" />
            <DayCalendar text="11" />
          </div>
          <button className='popupDate__close' onClick={this.props.closePopup}>close me</button>
        </div>
      </div>
    )
  }
}

export default Calendar;