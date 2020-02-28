import React, { Component } from 'react';
import calendrier from "../assets/icon/calendrier.svg";
import OneSport from "./OneSport";
import Calendar from './Calendar';

class ChoseDate extends Component{
  constructor(props){
    super(props);
    this.state = {
      showPopup: false,
      dayDate: "26",
      monthDate: "07",
      data: [],
      idSport: ''
    };
  }

    //Fonction qui fait une requete vers l'API puis met les données dans la variable data dans le state
    async componentDidMount(){
      const response = await fetch(`http://127.0.0.1:8080/olympic-events/2024-${this.state.monthDate}-${this.state.dayDate}`);
      const json = await response.json();
      this.setState({ data: json })
      this.slider()
    };

    //Fonction qui change les valeurs de dayDate et monthDate par rapport à la date sur laquelle on a cliqué dans le calendrier et fermer le calendrier
    onNewDate(date){
      this.setState(
        {
        dayDate: date.day,
        monthDate: date.month,
        showPopup: !this.state.showPopup
        },
        //Fonction de callback qui rappelle la fonction componentDidMount car les valeurs dayDate et monthDate ont changés
        ()=>{this.componentDidMount()}
      )
    };

    slider(){
      let buttons = document.querySelectorAll(".slider--button"); /*Met les bouttons dans une liste */
      let forwardtoken = 1; /*Sert a gérer l'avancement du slider */
      let backwardtoken = 1; /*Sert a gérer le recul du slider */
      let numberOfSlides = document.querySelectorAll(".slide"); /*Met toutes les slides dans une liste */
      let slidesPerSlide = numberOfSlides.length / 3; /*Variable retournant le nombre de slides en tout */
      let slides = document.querySelector(".slides"); /*Variable qui stocke le slider */

      for(let i=0; i<buttons.length ; i++){
        buttons[i].addEventListener('click', ()=>{
          if(i === 0){
            if (backwardtoken > 1) {
              let value = 750 * forwardtoken; /*La div fait 999px et comporte 3 slides de 333px (comme le responsive ne compte pas autant faire simple) */
              forwardtoken++;
              backwardtoken--;
              slides.style.transform = "translateX(" + value + "px)"; 
              if (backwardtoken === 1) {
                buttons[0].style.visibility = "hidden";
              }
              buttons[1].style.visibility = "visible"
            }
          } else if(i === 1){
            if (numberOfSlides.length / 3 > backwardtoken) {
              let value = 750 * backwardtoken;
              backwardtoken++;
              forwardtoken--;
              slides.style.transform = "translateX(-" + value + "px)";
              buttons[0].style.visibility = "visible";
              if (slidesPerSlide <= backwardtoken) {
                buttons[1].style.visibility = "hidden";
              }
            }
          }
        })
      }
      if (slidesPerSlide < backwardtoken) {
        buttons[1].style.visibility = "hidden";
      }
    }

    //Fonction qui permet de changer la variable qui fait que le calendrier est visible ou pas
    togglePopup() {
      this.setState({
        showPopup: !this.state.showPopup
      });
    };

    //Fonction qui va envoyer le nom du sport cliqué dans la props onClick du component Landing
    onClick(sport){
      this.props.onClick({
        sport: sport.sport,
        picSport: sport.picSport,
        idSport: sport.idSport
      })
    };


  render(){
    return(
      <div className={this.props.inContent === true ? 'in-content' : ''}>
        <div className="landingDate">
          <p onClick={this.togglePopup.bind(this)}>
            {this.state.dayDate} {this.state.monthDate === "07" ? "Juillet" : "Août"} 2024
          </p>
          <img src={calendrier} alt="Calendrier" />
        </div>
        {this.state.showPopup ?
          <Calendar
            onNewDate={this.onNewDate.bind(this)}
            closePopup={this.togglePopup.bind(this)}
            dayDate={this.state.dayDate}
          /> :
          null
        }
        <h3 className="landingTodayOlympicsTitle">Épreuves olympiques du jour</h3>
        <section class="slider--wrapper" style={this.state.showPopup === true ? {zIndex: '-1'} : {zIndex: '0'}}>
          <button class="slider--button prev--button"><img src={require('../assets/icon/left.svg')} /></button>
          <div class="slider">
            <div class="slides">
              {this.state.data.map(sport => (
                <div key={sport.image} class="slide">
                  <OneSport key={sport.image} nameSport={sport.practice} idSport={sport.id} srcImage={sport.image} onClick={this.onClick.bind(this)} />
                </div>
              ))}
            </div>
          </div>
          <button class="slider--button next--button"><img src={require('../assets/icon/right.svg')} /></button>
        </section>
      </div>
    )
  }
}

export default ChoseDate;