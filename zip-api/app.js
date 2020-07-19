const express = require('express');
const app = express();

const zipdb = require('./zipData');

const PORT = process.env.PORT || 8000;


// console.log(zipdb.byCity);

// Project 00: Hello World
// app.get('/', (req, res) => {
//     res.send('Hello World!')
// });

app.get('/', (req, res) => {
    res.json({test: 'Yay'});
});


app.get('/zip/:zipcode', (req, res) => {
    let zipcode = req.params.zipcode;
    let results = zipdb.byZip[zipcode];
    res.json(results);
});


app.get('/city/:cityname', (req, res) => {
    let cityname = req.params.cityname;
    let results = zipdb.byCity[cityname];
    res.json(results);
});


app.listen(PORT, function () {
    console.log(`zip-api is up and running on ${PORT}`);
});
