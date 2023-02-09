import React from 'react'

function FunctionClick() {

    function clickhandler() {
        console.log("button Clicked");
    }

  return (
    <div><button onClick={clickhandler}>Click</button></div>
  )
}

export default FunctionClick