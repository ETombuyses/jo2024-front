import React, { Component } from 'react';
import Calendar from './Calendar';

class Date extends Component{
  constructor(props){
    super(props);
    this.state = { showPopup: false };
  }

  togglePopup() {
    this.setState({
      showPopup: !this.state.showPopup
    });
  }
  render(){
    return(
      <div>
        <h1>Date</h1>
        <button onClick={this.togglePopup.bind(this)}> Click To Launch Popup</button>
        {this.state.showPopup ?
<Calendar closePopup={this.togglePopup.bind(this)} /> : null
        }
      </div>
    )
  }
}

export default Date;