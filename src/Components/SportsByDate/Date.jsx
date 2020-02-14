import React, { Component } from 'react';
import Calendar from './Calendar';
import OneSport from './OneSport'

class Date extends Component{
  constructor(props){
    super(props);
    this.state = {
      showPopup: false,
      dayDate: "29",
      monthDate: "07",
      data: []
     };
  }

  async componentDidMount() {
    const response = await fetch(`http://127.0.0.1:8080/olympiceventsbydate/2024-${this.state.monthDate}-${this.state.dayDate}`);
    const json = await response.json();
    this.setState({ data: json })
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
    <button onClick={this.togglePopup.bind(this)}>{this.state.textDate}</button>
          {this.state.data.map(sport => (
            <OneSport key={sport.image_name} nameSport={sport.practice} srcImage={sport.image_name} />
          ))}
        {this.state.showPopup ?
<Calendar closePopup={this.togglePopup.bind(this)} /> : null
        }
      </div>
    )
  }
}

export default Date;