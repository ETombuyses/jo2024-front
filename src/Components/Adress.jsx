import React, { Component } from 'react';
import AdressSingle from './AdressSingle';

class Adress extends Component{

  constructor(props){
    super(props)
    this.state = {
      idSport: this.props.id,
      data: [],
      arrondissement: '',
    }
  }

  async componentDidMount() {
    if(this.state.arrondissement === ''){
      const response = await fetch(`http://127.0.0.1:8080/address/list/${this.state.idSport}/false/false/false`);
      const json = await response.json();
    this.setState({ data: json })
    } else {
      const response = await fetch(`http://127.0.0.1:8080/address/list/${this.state.idSport}/false/false/false/${this.state.arrondissement}`);
      const json = await response.json();
      this.setState({ data: json })
    }
  }

  componentDidUpdate(){
    if(this.props.arrondissement !== this.state.arrondissement){
      this.setState({
        arrondissement: this.props.arrondissement
      }, ()=>{
        this.componentDidMount()
      })
    }
  }

  onClick(){
    this.props.changePageOther()
  }

  render(){
    return(
      <div class="adress">
        <div className="adress__back">
          <p onClick={this.onClick.bind(this)}>Retour</p>
        </div>
        <div className="adress__sport">
          <img src={require(`../assets/icon-sport/${this.props.pic}.svg`)} />
          <h4>{this.props.name}</h4>
        </div>
        <div className="adress__adress">
          <p>Liste des établissements : {this.state.data.length}</p>
          <div className="adress__single">
            {this.state.data.map(adress => {
              return <AdressSingle name={adress.facilityName} number={adress.addressNumber} nameAdress={adress.addressStreet} code={adress.arrondissement} />
            })}
          </div>
        </div>
      </div>
    )
  }
}

export default Adress;