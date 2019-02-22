import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import parser from 'body-parser';

import Tile from './src/components/tile';
import Row from './src/components/row';
import TitleBar from './src/components/titleBar';
import './dist/style.css';

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
            // tilesPerRow : Math.floor((window.innerWidth -28)/ 154)
            tilesPerRow : document.getElementById('recs').offsetWidth / 154
        };
        // this.makeTile = this.makeTile.bind(this);
        // this.makeRow = this.makeRow.bind(this);
        this.update = this.update.bind(this);
        this.changePage = this.changePage.bind(this);
        this.resize = this.resize.bind(this);
    }

    componentDidMount(){
        this.update();
        //window.alert(document.getElementById('recs').offsetWidth);
        // setInterval(() => {
        //     this.update()
        // }, 5000);
    }

    resize(){
        this.setState({tilesPerRow : Math.floor((window.innerWidth -28)/ 154)});
    }

    render(){
        window.onresize = this.resize;
        return(
        <div id='main'>
        {/* <span>window width: {window.innerWidth} | </span>
        <span>{this.state.rowName} | </span>
        <span>page {Math.ceil((this.state.currentPage + 0.01)/(this.state.tilesPerRow))} of {Math.ceil(this.state.things.length / this.state.tilesPerRow)}</span>
        <br/><button onClick={()=>{this.changePage(1)}}>scroll forward</button> */}
            <TitleBar changePage={this.changePage} rowName={this.state.rowName} currentPage={this.state.currentPage} tilesPerRow={this.state.tilesPerRow} thingCount={this.state.things.length} />{/*window resize stuff.*/}
            <Row things={this.state.things}  page={this.state.currentPage} tilesPerRow={this.props.tilesPerRow}/>
            {/* <Tile thing={this.state.things[0]}/> */}
            {/* {this.makeTile(this.state.things)} */}
        </div>
        );
    }

    // makeRow(thing){
    //     return(<Row things={this.state.things} page={this.state.currentPage}/>)
    // }

    // makeTile(thing){
    //     return(<Tile thing={thing}/>)
    // }

    changePage(change){
        var srch = new URLSearchParams(window.location.search);
        console.log(srch.get('id'));
        if(((this.state.currentPage + change) > 0) && (this.state.currentPage < (this.state.things.length  - (this.state.tilesPerRow) ))){
            // var newPage = (this.state.currentPage + change);
            // console.log('scrolling to '+ newPage +'was attempted');
            if((this.state.currentPage + change) > (this.state.things.length - 1)){
                // if(this.state.currentPage >= this.state.things.length -1){
                // }
                this.setState({currentPage : (this.state.things.length - (this.state.tilesPerRow))});
            } else{
                this.setState({currentPage : (this.state.currentPage + (change*this.state.tilesPerRow))});
            }
        } else {
            console.log('scrolling to 0 was attempted');
            this.setState({currentPage : 0});
        }
    }

    update(){
        console.log('requesting data for id: ' + this.props.id);
        axios.get('http://ec2-3-91-242-160.compute-1.amazonaws.com:3000/t?id=' + (this.props.id || 0))
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

function getItemId(){
    var srch = new URLSearchParams(window.location.search);
    return srch.get('id')}


ReactDOM.render(<App id={getItemId()}
    // {(()=>{
    // var srch = new URLSearchParams(window.location.search);
    // return 3;})}
/>, document.getElementById('recs'));