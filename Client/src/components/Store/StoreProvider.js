import React, { Component } from "react";

const Context = React.createContext();

export const Provider = Context.Provider;
export const Consumer = Context.Consumer;

export class StoreProvider extends Component {

  constructor() { 
    super()
    this.state= {
        videoslist: []
    }
}

componentDidMount() {
    fetch('http://localhost:3000/videos')
    .then(res => res.json())
    .then(videoslist => this.setState({videoslist}))
}
  

  render() {
    return (
      <>

        <Provider value={this.state}>{this.props.children}</Provider>
      </>
    );
  }
}

export default StoreProvider;
