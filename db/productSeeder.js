const neo4j = require('neo4j-driver').v1;
const driver = neo4j.driver("bolt://localhost", neo4j.auth.basic("neo4j", "neo4j"));
const session = driver.session();

session
    .run(`LOAD CSV FROM 'file:///products.csv' AS line MERGE (p: Product {id: TOINT(line[0]), name: line[1], stars: line[2], reviews: line[3], price: line[4], imageUrl: line[5], prime: line[6]}) RETURN p.name AS name`)
    .subscribe({
        onNext: function (record) {
            console.log(record.get('name'));
        },
        onCompleted: function() {
            session.close();
        },
        onError: function (error) {
            console.log(error)
        }
    });