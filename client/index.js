import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import parser from 'body-parser';

import Tile from './src/components/tile';
import Row from './src/components/row';

class App extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            things : ['a','b']
        };
        this.makeTile = this.makeTile.bind(this);
    }

    componentDidMount(){
        axios.get('http://127.0.0.1:3000/t')
        .then((result)=>{
            console.log(result.data);
            this.setState({things : result.data})
        })
        .catch((err)=>{console.log('ERROR after get request: '+err)});
    }

    render(){
        return(
        <div>rendered via react
            {this.makeTile()}
        </div>
        );
    }

    makeRow(thing){
        return(<Row things={this.state.things}/>)
    }

    makeTile(thing){
        return(<Tile thing={this.state.things[0]}/>)
    }
}

ReactDOM.render(<App />, document.getElementById('app'));