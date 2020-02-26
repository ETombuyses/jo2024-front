import React, { Component } from 'react';
import Sport from './Sport';

class AllSports extends Component{
  constructor(props){
    super(props)
    this.state = {
      data: [],
      arrondissement: ''
    }
  }

  //Fonction qui fait une requete vers l'API puis met les données dans la variable data dans le state
  async componentDidMount() {
    const response = await fetch(`http://127.0.0.1:8080/sport/list/all/olympic/sport/false/false/false${this.state.arrondissement}`);
    const json = await response.json();
    this.setState({ data: json })
  }

  changeArrondissement(){
    this.setState({arrondissement : this.props.arrondissement}, ()=>{
      this.componentDidMount();
    })
  }

  onClick(sport){
    this.props.changePage({
      idSport: sport.idSport,
      nameSport: sport.nameSport,
      picSport: sport.picSport
    })
  }

  render(){
    return(
      <div>
        <h4>Tous les sports {this.state.arrondissement}</h4>
        {this.state.data.map(sport => (
          <Sport name={sport.practice} pic={sport.image} id={sport.id} changePage={this.onClick.bind(this)} />
        ))}
      </div>
    )
  }
}

export default AllSports;