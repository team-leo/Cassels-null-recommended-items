
var models = require('./models');

function fetchItems(req, res){
    var reply = function(output){
        res.send(output);
    }
    models.fetchItems(reply);
}

module.exports.fetchItems = fetchItems;