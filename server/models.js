const neo4j = require('neo4j-driver').v1;
const driver = neo4j.driver("bolt://localhost", neo4j.auth.basic("neo4j", "neo4j"));
const session = driver.session();
const {performance} = require('perf_hooks');

function fetchItems(id){
    result = [];
    session
    .run(`MATCH (n:Product {id: "${id}"})--(c) RETURN c`)
    .subscribe({
        onNext: function (record) {
            console.log(record.get('c'));
            result.push(record.get('c'));
        },
        onCompleted: function() {
            session.close();
        },
        onError: function (error) {
            console.log(error)
        }
    });
    return result;
}

function fetchBundle(cb){
    return cb(path.resolve(__dirname,'../client/dist/bundle.js'));
}

module.exports.fetchItems = fetchItems;
module.exports.fetchBundle = fetchBundle;