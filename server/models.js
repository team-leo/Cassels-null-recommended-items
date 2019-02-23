const sqlite = require('sqlite3').verbose();
const path = require('path');
var db = require('../db/index.js');

function fetchItems(cb, id){
    var search = (id || (Math.random()*100))*4; //decide what item to look up, pick randomly if none is provided
    var output = [];
    var querry = ('SELECT * FROM merch WHERE id > '+search
    +' AND id < '+(search+60)) //what type/how many recomendations
    db.each(querry, (err, row)=>{
        if(err){
            console.log('ERROR after querry: '+err);
        } else{
            output.push(row);
        }
    }, ()=>{cb(output)});//send request data to client
}

function fetchBundle(cb){
    return cb(path.resolve(__dirname,'../client/dist/bundle.js'));
}

module.exports.fetchItems = fetchItems;
module.exports.fetchBundle = fetchBundle;