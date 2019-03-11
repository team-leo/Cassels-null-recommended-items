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
        if (Array.isArray(onScrn) && onScrn.length > 2) {
            return(
            <div className='row'>
                {onScrn.map((thing)=>{
                    return(<Tile thing={thing._fields[0].properties} id={thing._fields[0].properties.id} prime={thing._fields[0].properties.prime.low} />)
                })}
            </div>)
        }
        return(
            <div className='row'>
                <Tile thing={this.props.things} />
            </div>)
    }
}

export default Row;