import React from "react";
import basketball from "../assets/img/Basketball.svg";
import Sport from "../Components/Sport";
import Adress from "../Components/Adress";
/*import Filters from "../Components/Filters";*/

class Popup extends React.Component {
  constructor() {
    super();
    this.state = {
      arrondissement: "1er Arrondissement",
      Sport: "Basketball",
      CategorieChoisie: "Sport de ballons",
      SportChoisi: false,
      ClickedSport: "Basketball",
    };
  }

  switchDisplay(){
    if (this.state.SportChoisi === true) {
      this.setState({SportChoisi: false})
    }else{
    this.setState({SportChoisi: true});
   }
  }

  render() {
    return (
      <div className="popup">
        

      </div>
    );
  }
}

export default Popup;
