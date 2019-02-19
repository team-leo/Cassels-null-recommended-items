import React from 'react';
import ReactDOM from 'react-dom';

import Tile from './tile';

class Row extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            things : props.things//,
            //page : (props.page || 1)
        };
    }

    render(){
        var tilesPerRow = ((window.innerWidth -28)/ 204);
        var onScrn = this.props.things.slice(this.props.page, this.props.page+tilesPerRow);
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