import React, { Component } from 'react'

export default class classClick extends Component {

    clickhandler() {
        console.log("The Button has been pressed");
    }
  render() {
    return (
      <div><button onClick={() => {this.clickhandler()}}>Class Click</button></div>
    )
  }
}
