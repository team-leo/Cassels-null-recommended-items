const { Client } = require('pg');
const client = new Client();
const performance = require('perf_hooks');

// await client.connect();

// const res = await client.query('SELECT $1::text as message', ['Hello world!']);
// console.log(res.rows[0].message);
// await client.end();

// or

client.connect();

client.query(`COPY products(id,name,stars,reviews,price,imageUrl,prime)
    FROM $1 DELIMITER ',' CSV HEADER`, ['./db/products.csv'], (err, res) => {
        console.log(err ? err.stack : console.log('created products table in: ', performance.now()));
    client.end();
});