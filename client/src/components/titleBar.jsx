import React from 'react';
import ReactDOM from 'react-dom';

class TitleBar extends React.Component {
    constructor(props){
        super(props);
    }

    render(){
        return(
        <div>
            <span>window width: {window.innerWidth} | </span>
            <span>element width: {document.getElementById('recs').offsetWidth} | </span>
            <span>{this.props.rowName} | </span>
            <span>page {Math.ceil((this.props.currentPage + 0.01)/(this.props.tilesPerRow))} of {Math.ceil(this.props.thingCount / this.props.tilesPerRow)}</span>{/*magic algebra. if you need to change this, good luck*/}
            <br/><button onClick={()=>{this.props.changePage(1)}}>scroll forward</button>
        </div>
        );
    }
}

export default TitleBar;