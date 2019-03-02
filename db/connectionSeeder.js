const neo4j = require('neo4j-driver').v1;
const driver = neo4j.driver("bolt://localhost", neo4j.auth.basic("neo4j", "neo4j"));
const session = driver.session();

session
    .run(`LOAD CSV FROM 'file:///connections.csv' AS line
          MATCH (p:Product) WHERE p.id=TOINT(line[0])
          FOREACH(id IN line[1..] | MERGE(i:Product {id: TOINT(id)})
          MERGE (p)-[r:IS_RELATED_TO]-(i))`)
    // .run(`LOAD CSV FROM 'file:///connections.csv' AS line MATCH (p:Product) where p.id=line[0] MATCH (i: Product) where i.id=TOINT(line[1..]) FOREACH(id IN line[1..] | CREATE (p)-[r:IS_RELATED_TO]->(i)`)
    .subscribe({
        onNext: function (record) {
            console.log(record.get('r'));
        },
        onCompleted: function() {
            session.close();
        },
        onError: function (error) {
            console.log(error)
        }
    });
// MATCH (p1:Product) where p1.name="Intelligent Plastic Fish" MATCH (p5:Product) where p5.name="Practical Metal Pants" CREATE (p1)-[r:IS_RELATED_TO]->(p5)

// LOAD CSV FROM 'file:///friends.csv' AS line
// MERGE (p:Person {id: TOINT(line[0])})
// FOREACH(id IN line[1..] |
//   MERGE(f:Person {id: TOINT(id)})
//   MERGE (p)-[:HAS_FRIEND]-(f))

// THIS WORKS
// LOAD CSV FROM 'file:///connections.csv' AS line
// MATCH (p:Product) WHERE p.id=TOINT(line[0]) MATCH (i:Product) WHERE i.id= TOINT(line[1])
// MERGE (p)-[r:IS_RELATED_TO]-(i)

// LOAD CSV FROM 'file:///connections.csv' AS line
// MATCH (p:Product) WHERE p.id=TOINT(line[0])
// FOREACH(id IN line[1..] | MERGE(i:Product {id: TOINT(id)})
// MERGE (p)-[r:IS_RELATED_TO]-(i))