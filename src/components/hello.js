import React from "react";



function Hello(props) {
    return (
        <div>
            <h1>Hello {props.name} aka {props.heroName}</h1>
        {props.children}
        </div>
    );
}

export default Hello;