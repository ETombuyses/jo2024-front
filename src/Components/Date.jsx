import React, { Component } from 'react';
import Calendar from './Calendar';

class Date extends Component{
  constructor(props){
    super(props);
    this.state = { 
      showPopup: false,
      textDate: ""
     };
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
        {this.state.showPopup ?
<Calendar closePopup={this.togglePopup.bind(this)} /> : null
        }
      </div>
    )
  }
}

export default Date;