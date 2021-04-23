const express = require('express');
const CORS = require('cors');

const app = express();

app.use(CORS());

const productsData = require('./data/productData');

app.get('/', (req, res) => {
    console.log('yay')
})

app.get('/all', (req, res) => {
    console.log('all products')
})

app.listen(3000, (err) => {
    if (err) console.log(err);
    console.log('Server listening on port 3000');
})