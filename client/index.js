import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import parser from 'body-parser';

class App extends React.Component{
    constructor(props){
        super(props);
        this.state = {};
    }

    componentDidMount(){
        axios.get('http://127.0.0.1:3000/t')
        .then((result)=>{console.log(result)})
        .catch((err)=>{console.log('ERROR after get request: '+err)});
    }

    render(){
        return(
        <div>rendered via react</div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('app'));