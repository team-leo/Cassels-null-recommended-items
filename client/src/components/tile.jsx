import React from 'react';
import ReactDOM from 'react-dom';

class Tile extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            thing : props.thing
        };
    }

    render(){
        return(<span>{this.state.thing}</span>)
    }
}

export default Tile;