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
            things : [{id: 0,
                imageUrl: "http://lorempixel.com/640/480",
                name: "Incredible Plastic Bacon",
                price: "99.99",
                prime: 1,
                reviews: 1873,
                stars: 4}]
        };
        this.makeTile = this.makeTile.bind(this);
        this.makeRow = this.makeRow.bind(this);
        this.update = this.update.bind(this);
    }

    componentDidMount(){
        this.update();
        // setInterval(() => {
        //     this.update()
        // }, 5000);
    }

    render(){
        return(
        <div id='main'>
        <span>{window.innerWidth}</span>
            <Row things={this.state.things}/>
            {/* <Tile thing={this.state.things[0]}/> */}
            {/* {this.makeTile(this.state.things)} */}
        </div>
        );
    }

    makeRow(thing){
        return(<Row things={this.state.things}/>)
    }

    makeTile(thing){
        return(<Tile thing={thing}/>)
    }

    update(){
        axios.get('http://127.0.0.1:3000/t')
        .then((result)=>{
            console.log(result.data);
            this.setState({things : result.data})
            console.log(this.state.things);
            //ReactDOM.render(<Tile />, document.getElementById('main'));
            // document.getElementById('main').append(<div>appended</div>);
            
        })
        .catch((err)=>{console.log('ERROR after get request: '+err)});
    }
}

ReactDOM.render(<App />, document.getElementById('app'));