import React from 'react';

class Welcome extends React.Component {
    render () {
        return <h4>Hello, I am A Welcome {this.props.name} Component {this.props.heroName} from Class Component</h4>;
    }
}


export default Welcome;