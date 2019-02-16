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
        //this.setState({starBar : starBar});
        return(
        <div className='tile' width='333px'>
            <div><img src={this.props.thing.imageUrl} width='200px' hight='300px' /></div>
            <div>{this.props.thing.name}</div>
            <div className='stars'>{starBar}   {this.props.thing.stars}</div>
            <div><span>${this.props.thing.price}</span><span>{(this.props.thing.prime) ? ""
            :(<span className='isPrime'> <span className='primeTick'>✔</span><span className='primeWord'>prime</span> </span>)}</span></div>
        </div>)
    }
}

export default Tile;