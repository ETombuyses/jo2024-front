import React, { Component } from 'react';
import DayCalendar from './DayCalendar';
import './calendar.css';

class Calendar extends Component{

  test(item){
    this.props.test2({
      title2: item.title,
      mnth2: item.month
    })
  }

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
            <DayCalendar text="26" month="07" test={this.test.bind(this)} />
            <DayCalendar text="27" month="07" test={this.test.bind(this)} />
            <DayCalendar text="28" month="07" test={this.test.bind(this)} />
          </div>
          <div className='popupDate__date popupDate__date--2'>
            <DayCalendar text="29" month="07" test={this.test.bind(this)} />
            <DayCalendar text="30" month="07" test={this.test.bind(this)} />
            <DayCalendar text="31" month="07" test={this.test.bind(this)} />
            <DayCalendar text="1" month="08" test={this.test.bind(this)} />
            <DayCalendar text="2" month="08" test={this.test.bind(this)} />
            <DayCalendar text="3" month="08" test={this.test.bind(this)} />
            <DayCalendar text="4" month="08" test={this.test.bind(this)} />
          </div>
          <div className='popupDate__date popupDate__date--3'>
            <DayCalendar text="5" month="08" test={this.test.bind(this)} />
            <DayCalendar text="6" month="08" test={this.test.bind(this)} />
            <DayCalendar text="7" month="08" test={this.test.bind(this)} />
            <DayCalendar text="8" month="08" test={this.test.bind(this)} />
            <DayCalendar text="9" month="08" test={this.test.bind(this)} />
            <DayCalendar text="10" month="08" test={this.test.bind(this)} />
            <DayCalendar text="11" month="08" test={this.test.bind(this)} />
          </div>
          <button className='popupDate__close' onClick={this.props.closePopup}>close me</button>
        </div>
      </div>
    )
  }
}

export default Calendar;