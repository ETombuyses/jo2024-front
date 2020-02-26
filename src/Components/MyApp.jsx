import React from "react";
import Landing from "./Landing";
import Popup from "./Popup";

class MyApp extends React.Component {
  constructor() {
    super();
    this.state = {
      page: 1
    };
  }

  

  switchPages() {
    this.setState({ page: 2 });
  }
  handlePages() {
    if (this.state.page === 1) {
      return (
        <Landing
          onClick={() => {
            this.switchPages();
          }}
        ></Landing>
      );
    } else {
      return <Popup></Popup>;
    }
  }
  render() {
    return this.handlePages();
    console.log(this.props.term)
  }
}

export default MyApp;
