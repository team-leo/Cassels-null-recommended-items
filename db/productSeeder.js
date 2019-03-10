const neo4j = require('neo4j-driver').v1;
const {performance} = require('perf_hooks');
const config = require('./config.js')
const driver = neo4j.driver("bolt://localhost", neo4j.auth.basic("neo4j", config.key));
const session = driver.session();

// session
//     .run(`LOAD CSV FROM 'file:///products1.csv' AS line
//         MERGE (p: Product {id: TOINT(line[0]), name: line[1],
//         stars: line[2], reviews: line[3], price: line[4],
//         imageUrl: line[5], prime: line[6]}) RETURN p.name AS name`)
//     .subscribe({
//         // onNext: function (record) {
//         //     console.log(record.get('name'));
//         // },
//         onCompleted: function() {
//             console.log('performance for product seeding: ', performance.now());
//             session.close();
//         },
//         onError: function (error) {
//             console.log(error)
//         }
//     });

// session
//     .run(`LOAD CSV FROM 'file:///connections1.csv' AS line
//             MATCH (p:Product) WHERE p.id=TOINT(line[0])
//             FOREACH(id IN line[1..] | MERGE(i:Product {id: TOINT(id)})
//             MERGE (p)-[r:IS_RELATED_TO]-(i))`)
//     .subscribe({
//         // onNext: function (record) {
//         //     console.log(record.get('name'));
//         // },
//         onCompleted: function() {
//             console.log('performance for connection seeding: ', performance.now());
//             session.close();
//         },
//         onError: function (error) {
//             console.log(error)
//         }
//     });

session
    .run(`LOAD CSV FROM 'file:///products1.csv' AS line
        MERGE (p:Product {id: TOINT(line[0]), name: line[1],
        stars: line[2], reviews: line[3], price: line[4],
        imageUrl: line[5], prime: line[6]}) RETURN p.name AS name`)
    .then(function() {
        session.close();
        console.log('performance: ', performance.now());
    })
    .catch(function(err) {
        console.log(err);
    });