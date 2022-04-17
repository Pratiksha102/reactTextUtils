import React, { Component }from 'react'
import { useState } from 'react'

export default class App extends Component {
  constructor()
  {
    console.log("Constructor");
    super();
    this.state={
      stick:'pratiksha'

    }
  }

  componentDidUpdate(){

    console.log("componentdidUpdate");

  }
  render() {

    console.log("render");
   
    return (
      <div className="App">
        <h3>Hello React {this.state.stick}</h3>
        <button type="button" onClick={()=>this.setState({stick:'Gupta'})}></button>

      </div>

    )
  }
}
