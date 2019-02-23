import React from 'react';
import ReactDOM from 'react-dom';

class TitleBar extends React.Component {
    constructor(props){
        super(props);
    }

    render(){
        return(
        <div style={{height: '28px'}}>
        <div style={{float: 'left'}}>
            <span>{this.props.rowName} | </span>
            <span>page {Math.ceil((this.props.currentPage + 0.01)/(this.props.tilesPerRow))}{' of '}
            {Math.ceil(this.props.thingCount / this.props.tilesPerRow)}   </span>{/*magic algebra. if you need to change this, good luck*/}
            <button onClick={()=>{this.props.changePage(1)}}>more</button>
        </div>
        </div>
        );
    }
}

export default TitleBar;