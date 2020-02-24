import React from "react";
import Landing from "./Landing";
import Popup from "./Popup";

const context = React.createContext("");

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
      return (
        <context.Provider SportSelected="yes">
          <Popup></Popup>
        </context.Provider>
      );
    }
  }
  render() {
    return this.handlePages();
  }
}

export default MyApp;
