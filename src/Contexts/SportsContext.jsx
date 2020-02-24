import React, { createContext } from "react";

export const SportsContext = React.createContext();

export class SportsProvider extends React.Component {
  state = {
    term: "Oui"
  };

  render() {
    return (
      <SportsContext.Provider
        value={{
          ...this.state
        }}
      >
        {this.props.children}
      </SportsContext.Provider>
    );
  }
}
