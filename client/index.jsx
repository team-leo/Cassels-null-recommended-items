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
                stars: 4}],
            rowName : (this.props.rowName || "Related Items"),
            currentPage : 0,
            tilesPerRow : ((window.innerWidth -28)/ 204)
        };
        this.makeTile = this.makeTile.bind(this);
        this.makeRow = this.makeRow.bind(this);
        this.update = this.update.bind(this);
        this.changePage = this.changePage.bind(this);
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
        <span>window width: {window.innerWidth}   </span>
        <span>{this.state.rowName}</span>
        <button onClick={()=>{this.changePage(1)}}>scroll forward</button>
            <Row things={this.state.things}  page={this.state.currentPage}/>
            {/* <Tile thing={this.state.things[0]}/> */}
            {/* {this.makeTile(this.state.things)} */}
        </div>
        );
    }

    makeRow(thing){
        return(<Row things={this.state.things} page={this.state.currentPage}/>)
    }

    makeTile(thing){
        return(<Tile thing={thing}/>)
    }

    changePage(change){
        if((this.state.currentPage + change) > 0){
            // var newPage = (this.state.currentPage + change);
            // console.log('scrolling to '+ newPage +'was attempted');
            if((this.state.currentPage + change) > this.state.things.length){
                this.setState({currentPage : (this.state.things.length - (this.state.tilesPerRow))});
            }else{
                this.setState({currentPage : (this.state.currentPage + (change*this.state.tilesPerRow))});
            }
        } else {
            console.log('scrolling to 0 was attempted');
            this.setState({currentPage : 0});
        }
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