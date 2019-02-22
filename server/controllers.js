
var models = require('./models');

function fetchItems(req, res){
    var reply = function(output){
        res.send(output);
    }
    // console.log(req.query);
    models.fetchItems(reply, req.query.id);
}

function fetchBundle(req, res){
    var reply = function(output){
        res.sendFile(output);
    }
    models.fetchBundle(reply);
}

module.exports.fetchItems = fetchItems;
module.exports.fetchBundle = fetchBundle;