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
        var tilesPerRow = ((window.innerWidth -28)/ 204);
        var onScrn = this.props.things.slice(0,tilesPerRow);
        return(
        <div className='row'>
            {/* <Tile thing={this.props.things[0]}/> */}
            {onScrn.map((thing)=>{
                return(<Tile thing={thing} />)
            })}
        </div>)
    }
}

export default Row;