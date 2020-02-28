import React, { Component } from 'react';

class ArrondissementSingle extends Component{

  constructor(props){
    super(props)
    this.state = {
      idSportChosen: '',
      data: '',
      arrondissement: this.props.id,
      handicapSensory: false,
      handicapMobility: false,
      level: false
    }
  }

  async componentDidMount() {
    if(this.state.idSportChosen !== ''){
      const response = await fetch(`http://127.0.0.1:8080/addresses/${this.state.idSportChosen}/${this.state.handicapMobility}/${this.state.handicapSensory}/${this.state.level}/${this.state.arrondissement}`);
      const json = await response.json();
      this.setState({ data: json })
    }
  }

  componentDidUpdate(){
    if(this.props.idSportChosen !== this.state.idSportChosen){
      this.setState({
        idSportChosen: this.props.idSportChosen
      }, ()=>{
        this.componentDidMount()
      })
    }
  }

  arrondissementClicked(){
    this.props.onClick({
      nbArrondissement: this.props.id
    })
  }

  render(){
    return(
      <g className={this.props.isClicked === true ? 'arrondissement is-clicked' : 'arrondissement'} id={this.props.id} onClick={this.arrondissementClicked.bind(this)}>
        <path className="forme" d={this.props.formed} data-value={this.props.id} fill={this.props.removeSportChosen === true ? '#0C1971' : this.state.data.length < 1 ? 'rgba(255,255,255,0.56)' : (this.state.data.length < 10 ? 'rgba(255,239,99,0.22)' : (this.state.data.length < 20 ? 'rgba(255,140,5,0.22)' : 'rgba(166,1,1,0.22)'))} stroke={this.props.removeSportChosen === true ? '#FFF' : this.state.data.length < 1 ? '#FFF' : (this.state.data.length < 10 ? '#FFEF63' : (this.state.data.length < 20 ? '#FF8C05' : '#A60101'))}/>
        <path className="number" data-value={this.props.id} d={this.props.numberd} fill="white"/>
      </g>
    )
  }
}

export default ArrondissementSingle;