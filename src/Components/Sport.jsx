import React, { Component } from "react";

class Sport extends Component {

  constructor(props){
    super(props)
    this.state = {
      idSport: this.props.id,
      adress: [],
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
      this.setState({ adress: json })
    } else {
      const response = await fetch(`http://127.0.0.1:8080/addresses/${this.state.idSport}/${this.state.handicapMobility}/${this.state.handicapSensory}/false/${this.state.arrondissement}`);
      const json = await response.json();
      this.setState({ adress: json })
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
    if(this.props.id !== this.state.idSport){
      this.setState({
        idSport: this.props.id
      }, ()=>{
        this.componentDidMount()
      })
    }
  }

  onClick(){
    this.props.changePage({
      idSport: this.state.idSport,
      nameSport: this.props.name,
      picSport: this.props.pic
    })
  }

  render() {
    return (
      <div className="sportSingle" onClick={this.onClick.bind(this)}>
        <div className="sportSingle__picName">
          <img src={require(`../assets/icon-sport/${this.props.pic}.svg`)} />
          <h5>{this.props.name}</h5>
        </div>
        <div className="sportSingle__gauge">
          <div style={{width: this.state.adress.length + 'px'}}></div>
        </div>
        <div className="sportSingle__value">
          <p>{this.state.adress.length === undefined ? 0 : this.state.adress.length}</p>
        </div>
      </div>
    );
  }
}

export default Sport;
