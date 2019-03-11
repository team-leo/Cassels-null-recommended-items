
var models = require('./models');

function fetchItems(req, res){
    let recommendations = function(item){
        return models.fetchItems(item)
    }
    let list = recommendations(req.query.id)
    res.send(200, list);
}

function fetchBundle(req, res){
    var reply = function(output){
        res.sendFile(output);
    }
    models.fetchBundle(reply);
}

module.exports.fetchItems = fetchItems;
module.exports.fetchBundle = fetchBundle;