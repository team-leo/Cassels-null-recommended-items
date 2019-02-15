import React from 'react';
import ReactDOM from 'react-dom';

class Row extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            things : props.things
        };
    }

    render(){
        return(<div id='row'></div>)
    }
}

export default Row;