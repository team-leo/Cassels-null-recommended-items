const faker = require('faker');

let name = faker.commerce.productName();
let stars = Math.ceil((Math.random()*10))/2;
let reviews = Math.floor((Math.random()*Math.random()*10000));
let price = faker.commerce.price()+"";
let imageUrl = randomImg();
let prime = Math.round(Math.random());


function randomImg () {
var imgLinks = [
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

module.exports = {
    name,
    stars,
    reviews,
    price,
    imageUrl,
    prime
}