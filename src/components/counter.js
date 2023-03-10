import React, { Component } from 'react'

class counter extends Component {
    constructor() {
        super()
        this.state = {
            count: 0
        }
    }

    increment() {
        
        this.setState((prevState) => ({
            count: prevState.count+1
        }), () => {console.log("Updated")});
        
    }

    incrementFive() {
        this.increment()
        this.increment()
        this.increment()
        this.increment()
        this.increment()
    }

  render() {
    return (
      <div>
        <div>Count - {this.state.count}</div>
        <button onClick={this.incrementFive.bind(this)}>Click</button>
      </div>
    )
  }
}

export default counter