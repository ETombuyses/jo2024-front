import React, { Component } from 'react';
import AdressSingle from './AdressSingle';

class Adress extends Component{

  constructor(props){
    super(props)
    this.state = {
      idSport: this.props.id,
      data: [],
      arrondissement: '',
      handicapSensory: false,
      handicapMobility: false,
      level: false
    }
  }

  async componentDidMount() {
    if(this.state.arrondissement === ''){
      const response = await fetch(`http://127.0.0.1:8080/addresses/${this.state.idSport}/${this.state.handicapMobility}/${this.state.handicapSensory}/${this.state.level}`);
      const json = await response.json();
      this.setState({ data: json })
    } else {
      const response = await fetch(`http://127.0.0.1:8080/addresses/${this.state.idSport}/${this.state.handicapMobility}/${this.state.handicapSensory}/false/${this.state.arrondissement}`);
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
    if(this.props.handicapMobility !== this.state.handicapMobility){
      this.setState({
        handicapMobility: this.props.handicapMobility
      }, ()=>{
        this.componentDidMount()
      })
    }
    if(this.props.handicapSensory !== this.state.handicapSensory){
      this.setState({
        handicapSensory: this.props.handicapSensory
      }, ()=>{
        this.componentDidMount()
      })
    }
    if(this.props.level !== this.state.level){
      this.setState({
        level: this.props.level
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
        <div className="adress__header">
          <div className="adress__back">
            <p onClick={this.onClick.bind(this)}>Retour</p>
          </div>
          <div className="adress__arrondissement">
            {this.state.arrondissement === '' ? <p>Pas d'arrondissement sélectionné</p> : <p>{this.state.arrondissement}{this.state.arrondissement === 1 ? 'er' : 'ème'} arrondissement</p>}
          </div>
          <div className="adress__sport">
            <div className="adress__pic">
              <img src={require(`../assets/icon-sport/${this.props.pic}-white.svg`)} />
            </div>
            <h4>{this.props.name}</h4>
          </div>
        </div>
        <div className="adress__transition"></div>
        {this.state.data.length === undefined ? 
        <div>Pas d'établissements</div> :
        <div className="adress__adress">
          <p>Liste des établissements : {this.state.data.length}</p>
          <div className="adress__single">
          {this.state.data.map((adress, i) => {
            return <AdressSingle key={i} name={adress.facilityName} number={adress.addressNumber} nameAdress={adress.addressStreet} code={adress.arrondissement} />
          })}
          </div>
        </div>
        }
      </div>
    )
  }
}

export default Adress;