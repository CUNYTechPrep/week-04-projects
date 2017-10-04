const express = require('express');
const app = express();

const zipdb = require('./zipData');

const PORT = process.env.PORT || 8000;


//FOR TESTING PURPOSES
app.get('/', (req, res) => {
  res.json({test: 'Yay'});
});

//GET ZIPCODES
app.get('/zip/:zipcode', (req, res) => {
  const records = zipdb.byZip[req.params.zipcode];
  if(records === undefined) {
    res.sendStatus(404)
  } else {
    res.json(records)
  }
});

//GET CITY BY NAME IN UPPER CASE
app.get('/city/:cityname', (req, res) => {
  const records = zipdb.byCity[req.params.cityname];
  if(records === undefined) {
    res.sendStatus(404)
  } else {
    res.json(records)
  }
});




app.listen(PORT, () => {
  console.log(`zip-api is up and running on ${PORT}`);
});