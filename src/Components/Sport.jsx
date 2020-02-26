import React, { Component } from "react";

class Sport extends Component {

  constructor(props){
    super(props)
    this.state = {
      idSport: this.props.id,
      adress: [],
      arrondissement: undefined,
    }
  }

  async componentDidMount() {
    const response = await fetch(`http://127.0.0.1:8080/address/list/${this.state.idSport}/false/false/false`);
    const json = await response.json();
    this.setState({ adress: json })
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
          <div></div>
        </div>
        <div className="sportSingle__value">
          <p>{this.state.adress.length === undefined ? 0 : this.state.adress.length}</p>
        </div>
      </div>
    );
  }
}

export default Sport;
