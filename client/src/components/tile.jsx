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
        var starBar = '';
        for(var i = 1; i <= this.props.thing.stars; i++){
            starBar += '★';
        }
        
        return(
        <div className='tile' key={this.props.thing.id} width='320px'>
            <img className='recImage' src={this.props.thing.imageUrl} height='150px' width='150px'/>
            <div className='recName'>{this.props.thing.name}</div>
            <div className='stars'>{starBar}   {this.props.thing.stars}</div>
            <div><span className='recPrice'>${this.props.thing.price}</span><span>{(!this.props.prime) ? ""
            :(<span className='isPrime'> <span className='primeTick'>✔</span><span className='primeWord'>prime</span> </span>)}</span></div>
        </div>)
    }
}

export default Tile;