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
            things : [{id: 0,//single recomendation pre-loaded, overwiten once component mounts
                imageUrl: "http://lorempixel.com/640/480",
                name: "Incredible Plastic Bacon",
                price: "99.99",
                prime: 1,
                reviews: 1873,
                stars: 4}],
            rowName : (this.props.rowName || "Related Items"),
            currentPage : 0,
            // tilesPerRow : Math.floor((window.innerWidth -28)/ 154)
            tilesPerRow : (document.getElementById('recs').offsetWidth - 8) / 154
        };
        this.update = this.update.bind(this);
        this.changePage = this.changePage.bind(this);
        this.resize = this.resize.bind(this);
    }

    componentDidMount(){
        this.update();//update state.things with recomendations from database
        this.resize();
    }

    resize(){//adjust the number of recomendations shown bassed on the width avalible
        this.setState({tilesPerRow : Math.floor((document.getElementById('recs').offsetWidth - 8) / 154)});
    }

    render(){
        window.onresize = this.resize;
        return(
        <div id='main'>
            <TitleBar changePage={this.changePage} rowName={this.state.rowName} currentPage={this.state.currentPage} tilesPerRow={this.state.tilesPerRow} thingCount={this.state.things.length} />{/*window resize stuff.*/}
            <Row things={this.state.things}  page={this.state.currentPage} tilesPerRow={this.state.tilesPerRow}/>
        </div>
        );
    }

    changePage(change){//show more recomendations: note: contains uneeded complexity, bit of a mess to read.
        if(((this.state.currentPage + change) > 0) && (this.state.currentPage < (this.state.things.length  - (this.state.tilesPerRow) ))){
            if((this.state.currentPage + change) > (this.state.things.length - 1)){
                this.setState({currentPage : (this.state.things.length - (this.state.tilesPerRow))});
            } else{
                this.setState({currentPage : (this.state.currentPage + (change*this.state.tilesPerRow))});
            }
        } else {
            this.setState({currentPage : 0});
        }
    }

    update(){//is run on component mount, gets recomendation data from server database
        axios.get('http://ec2-3-91-242-160.compute-1.amazonaws.com:3000/t?id=' + (this.props.id || 0))
        .then((result)=>{
            this.setState({things : result.data})
        })
        .catch((err)=>{console.log('ERROR after get request: '+err)});
    }
}

function getItemId(){//get item id and render component
    var srch = new URLSearchParams(window.location.search);//read the 'id' property of the url query string, and pass it to the component as props
    return srch.get('id')}


ReactDOM.render(<App id={getItemId()}/>, document.getElementById('recs'));//render element