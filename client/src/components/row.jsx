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
        var onScrn = this.props.things.slice(this.props.page, Math.floor(this.props.page+Math.floor(this.props.tilesPerRow)));
        return(
        <div className='row'>
            {onScrn.map((thing)=>{
                return(<Tile thing={thing} />)
            })}
        </div>)
    }
}

export default Row;