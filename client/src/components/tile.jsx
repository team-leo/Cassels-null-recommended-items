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
        return(
        <div className='tile' width='333px'>
            <div><img src={'http://img3.wikia.nocookie.net/__cb20131224023258/pokemon/images/7/79/063Abra_OS_anime_2.png'/*this.props.thing[0].imageUrl*/} width='100px' hight='100px' /></div>
            <div>{this.props.thing[0].name}</div>
            <div>{this.props.thing[0].stars} stars</div>
            <div><span>${this.props.thing[0].price}</span><span>{(this.props.thing[0].prime) ? "":"  prime"}</span></div>
        </div>)
    }
}

export default Tile;