import React, { Component } from 'react';
import Calendar from './Calendar';
import OneSport from './OneSport'
import CalendarContext from './CalendarContext';

class Date extends Component{
  constructor(props){
    super(props);
    this.state = {
      showPopup: false,
      dayDate: "",
      monthDate: "07",
      data: []
     };
  }

  async componentDidMount() {
    const response = await fetch(`http://127.0.0.1:8080/olympiceventsbydate/2024-${this.state.monthDate}-${this.state.dayDate}`);
    const json = await response.json();
    this.setState({ data: json })
  }

  test2(item){
    this.setState({ dayDate: item.title2 }, () => { console.log(this.state.dayDate) })
  }

  togglePopup() {
    this.setState({
      showPopup: !this.state.showPopup
    });
  }

  onNewDate(){
    this.setState({
      textDate: ""
    });
  }

  render(){
    return(
      <div>
        <h1>Date</h1>
    <button onClick={this.togglePopup.bind(this)}>{this.testt}</button>
          {this.state.data.map(sport => (
            <OneSport key={sport.image_name} nameSport={sport.practice} srcImage={sport.image_name} />
          ))}
        {this.state.showPopup ?
<Calendar test2={this.test2.bind(this)} closePopup={this.togglePopup.bind(this)} /> : null
        }
      </div>
    )
  }
}

export default Date;