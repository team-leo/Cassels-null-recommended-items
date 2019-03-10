const fs = require('fs');
const path = require('path');
const os = require('os');
const faker = require('faker');
const {performance} = require('perf_hooks');

// const productInfoFile = path.join(__dirname, `../neo4j-community-3.5.3/import/products${csvNum}.csv`);


// const connectionList = path.join(__dirname, `../neo4j-community-3.5.3/import/connections${csvNum}.csv`);


function randomImg () {
let imgLinks = [
    "https://drive.google.com/file/d/1sZPsedNdoLscqTE55DSP6jSQbK7pRPzm/view?usp=sharing",
    "https://drive.google.com/file/d/1N2hy4MnrYT4WkZQz2F-VDdhYnGLxMTtR/view?usp=sharing",
    "https://drive.google.com/file/d/198UuYUfIv_hndvxZ8fww-2xyhqq5Wk7l/view?usp=sharing",
    "https://drive.google.com/file/d/1E-KiWg3i4Dm3qIo-h-1tsXMcj_nUVkT9/view?usp=sharing",
    "https://drive.google.com/file/d/1IjuLqs40C9_KFRrp87QC44ugzbOLuR0B/view?usp=sharing",
    "https://drive.google.com/file/d/1SHgfKA7quz70QkiJ_OOa7KrXvB45uLpT/view?usp=sharing",
    "https://drive.google.com/file/d/1V0pgiCDsUfOAnAIHNxDjqqarcnMOg-d2/view?usp=sharing",
    "https://drive.google.com/file/d/1i5f6d05jWFbMDdAQj8Zp_plxSvWm8lpM/view?usp=sharing",
    "https://drive.google.com/file/d/1AOutGp8Mz5yJRnGVaIuQKjNOKnErYeZI/view?usp=sharing",
    "https://drive.google.com/file/d/1JVoylCGIVef-pTn8KZ5RvsI_GA48SGJq/view?usp=sharing",
    "https://drive.google.com/file/d/1Qz6NylGV_z66bGuvIdGk8w8vRQZMSxKu/view?usp=sharing",
    "https://drive.google.com/file/d/1uHbx1c3BB5ETinwXSq2tEAzb7TkgjdQW/view?usp=sharing",
    "https://drive.google.com/file/d/1ugXsEoEXmYBKNH9HqS15P-_qL9tj5k5P/view?usp=sharing",
    "https://drive.google.com/file/d/1F8jGH7v5vpCE9tBw3ZXGXx45jN4-1iWa/view?usp=sharing",
    "https://drive.google.com/file/d/1B1KNaeAP0lFs_aHXToR8-l6oqUxGK6EF/view?usp=sharing",
    "https://drive.google.com/file/d/1RPaxuI7sGWdBMeqwg3UKEj2YIj_Mey4u/view?usp=sharing",
    "https://drive.google.com/file/d/12hIrXz_SVjXOKN2KW6TWhx-EvY1-d13H/view?usp=sharing"
];
    return( imgLinks[(Math.floor((imgLinks.length) * Math.random()))]);
}

let start = 1;
let end = 10001;

const productOutput = [['id:ID','name','stars','reviews:int','price','imageUrl','prime:int',':LABEL']];
const connections = [[':START_ID',':END_ID',':TYPE']];

for (let n = 0; n < 1000; n++) {
    for (let i = start; i < end; i++) {
        let name = faker.commerce.productName();
        let stars = Math.ceil((Math.random()*10))/2;
        let reviews = Math.floor((Math.random()*Math.random()*10000));
        let price = faker.commerce.price()+"";
        let imageUrl = randomImg();
        let prime = Math.round(Math.random());
        const row = [];
        row.push(i);
        row.push(name);
        row.push(stars);
        row.push(reviews);
        row.push(price);
        row.push(imageUrl);
        row.push(prime);   
        row.push('Product') 
        productOutput.push(row);
    }

    for (let j = start; j < end; j++) {
        relatedItems = [];
        let num = Math.ceil(Math.random() * 60) + 10;
        for (let k = 1; k < num; k++) {
            const row = [];
            row.push(j);
            let related = Math.floor(Math.random() * (end - start) + start);
            if (related !== j && !relatedItems.includes(related)) {
                row.push(related);
                relatedItems.push(related);
                row.push('IS_RELATED_TO');
                connections.push(row);
            }
        }
    }
    start = start + 10000;
    end = end + 10000;
}
fs.writeFileSync(path.join(__dirname, `../neo4j-community-3.5.3/import/products.csv`), productOutput.join(os.EOL));
fs.writeFileSync(path.join(__dirname, `../neo4j-community-3.5.3/import/connections.csv`), connections.join(os.EOL));
console.log('performance: ', performance.now());