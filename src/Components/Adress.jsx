import React, { Component } from 'react';

class Adress extends Component{

  constructor(props){
    super(props)
    this.state = {
      idSport: this.props.id,
      data: []
    }
  }

  async componentDidMount() {
    const response = await fetch(`http://127.0.0.1:8080/address/list/${this.state.idSport}/false/false/false`);
    const json = await response.json();
    this.setState({ data: json })
  }

  render(){
    return(
      <div class="adress">
        <div className="adress__back">
          <p>Retour</p>
        </div>
        <div className="adress__sport">
          <h4>{this.props.name} {this.props.id}</h4>
        </div>
        <div className="adress__adress">
          <p>Liste des établissements : 200</p>
          <div className="adress__single">
            <p>Centre Sportif Paul Valéry<br></br>
            32 Rue Stéphanie, 75008 Paris</p>
          </div>
        </div>
      </div>
    )
  }
}

export default Adress;