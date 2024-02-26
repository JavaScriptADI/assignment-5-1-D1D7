const PRODUCT_COUNT = 50;
const products = [];



function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandomString(length) {
    let text = '';
    for (let i = 0; i < length; i++) {
        if (getRandomInt(0, 100) > 10)
            text += String.fromCharCode(getRandomInt(97, 122));
        else
            text += ' ';
    }
    return text;
}

for (let i = 0; i < PRODUCT_COUNT; i++) {
    products.push({
        title: getRandomString(getRandomInt(30, 60)),
        price: getRandomInt(500, 5000),
        description: getRandomString(getRandomInt(300, 1000))
    });
}



let totalWords = 0;

for (let i = 0; i < products.length; i++) {
    const description = products[i].description;
    const words = description.split(' ').filter(word => word.trim() !== '').length;
    totalWords += words;
}

const averageWordsPerDescription = totalWords / products.length;

console.log(`Average words per description: ${averageWordsPerDescription.toFixed(2)}`);








const PRODUCT_COUNT = 50;
const products = [];



function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandomString(length) {
    let text = '';
    for (let i = 0; i < length; i++) {
        if (getRandomInt(0, 100) > 10)
            text += String.fromCharCode(getRandomInt(97, 122));
        else
            text += ' ';
    }
    return text;
}

for (let i = 0; i < PRODUCT_COUNT; i++) {
    products.push({
        title: getRandomString(getRandomInt(30, 60)),
        price: getRandomInt(500, 5000),
        description: getRandomString(getRandomInt(300, 1000))
    });
}


let totalCharacters = 0;

for (let i = 0; i < products.length; i++) {
    const description = products[i].description;
    totalCharacters += description.length;
}

const averageCharactersPerDescription = totalCharacters / products.length;

console.log(`Average characters per description: ${averageCharactersPerDescription.toFixed(2)}`);


            








const PRODUCT_COUNT = 50;
const products = [];



function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandomString(length) {
    let text = '';
    for (let i = 0; i < length; i++) {
        if (getRandomInt(0, 100) > 10)
            text += String.fromCharCode(getRandomInt(97, 122));
        else
            text += ' ';
    }
    return text;
}

for (let i = 0; i < PRODUCT_COUNT; i++) {
    products.push({
        title: getRandomString(getRandomInt(30, 60)),
        price: getRandomInt(500, 5000),
        description: getRandomString(getRandomInt(300, 1000))
    });
}


let maxWords = 0;

for (let i = 0; i < products.length; i++) {
    const description = products[i].description;
    const words = description.split(' ').filter(word => word.trim() !== '');
    maxWords = Math.max(maxWords, words.length);
}

console.log(`Maximum words in descriptions: ${maxWords}`);






const PRODUCT_COUNT = 50;
const products = [];



function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandomString(length) {
    let text = '';
    for (let i = 0; i < length; i++) {
        if (getRandomInt(0, 100) > 10)
            text += String.fromCharCode(getRandomInt(97, 122));
        else
            text += ' ';
    }
    return text;
}

for (let i = 0; i < PRODUCT_COUNT; i++) {
    products.push({
        title: getRandomString(getRandomInt(30, 60)),
        price: getRandomInt(500, 5000),
        description: getRandomString(getRandomInt(300, 1000))
    });
}


let minPrice = Number.MAX_VALUE;

for (let i = 0; i < products.length; i++) {
    const price = products[i].price;
    minPrice = Math.min(minPrice, price);
}

console.log(`Minimum price in descriptions: ${minPrice}`);

