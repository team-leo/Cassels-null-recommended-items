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
        //https://drive.google.com/open?id=1X9f8NovT68ABI2aQg5L5KnBG7Cw3kJm2
        return(
        <div className='tile' width='320px'>
            <div><iframe src={this.props.thing.imageUrl} width='200px' hight='300px' /></div>
            {/* <div><iframe src="https://drive.google.com/file/d/1X9f8NovT68ABI2aQg5L5KnBG7Cw3kJm2/preview" width='200px' hight='200px' /></div> */}
            <div className='recName'>{this.props.thing.name}</div>
            <div className='stars'>{starBar}   {this.props.thing.stars}</div>
            <div><span>${this.props.thing.price}</span><span>{(this.props.thing.prime) ? ""
            :(<span className='isPrime'> <span className='primeTick'>✔</span><span className='primeWord'>prime</span> </span>)}</span></div>
        </div>)
    }
}

export default Tile;