import React from 'react';
import ReactDOM from 'react-dom';

import Tile from './tile';

class Row extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            things : props.things
        };
    }

    render(){
        return(
        <div id='row'>
            <Tile thing={this.props.things[0]}/>
        </div>)
    }
}

export default Row;