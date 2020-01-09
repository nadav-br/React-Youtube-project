import React, { Component } from "react";

const Context = React.createContext();

export const Provider = Context.Provider;
export const Consumer = Context.Consumer;

export class StoreProvider extends Component {
  state = {
    Videos: [
      {
        id: "1",
        name: "Masha and the Bear",
        url: "https://www.youtube.com/watch?v=ac9a8mLgCHY"
      },
      {
        id: "2",
        name: "ערוץ הופ!",
        url: "https://www.youtube.com/watch?v=tcMMmXpw6d8"
      },
      {
        id: "3",
        name: "Disney Junior Israel",
        url: "https://www.youtube.com/watch?v=XIepGJvUA7I"
      },
      {
        id: "4",
        name: "Disney Junior Israel",
        url: "https://www.youtube.com/watch?v=JWFdJHxVAKk"
      }
    ]
  };

  render() {
    return (
      <>
        <Provider value={this.state}>{this.props.children}</Provider>
      </>
    );
  }
}

export default StoreProvider;
