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
        var onScrn = this.props.things.slice(0,6);
        return(
        <div className='row' hight='999px'>
            {/* <Tile thing={this.props.things[0]}/> */}
            {onScrn.map((thing)=>{
                return(<Tile thing={thing} />)
            })}
        </div>)
    }
}

export default Row;