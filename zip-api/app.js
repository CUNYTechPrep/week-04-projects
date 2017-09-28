const express = require('express');
const app = express();

const zipdb = require('./zipData');

const PORT = process.env.PORT || 8000;


// console.log(zipdb.byCity);


app.get('/', (req, res) => {
  res.json({test: 'Yady'});
});


app.get('/zip/:zipcode', (req, res) => {
  const zip = req.params.zipcode;
  results = zipdb.byZip[zip];
  res.json(results);
});


app.get('/city/:cityname', (req, res) => {
  const ctName = req.params.cityname;
  results = zipdb.byCity[ctName];
  res.json(results);
});


app.listen(PORT, () => {
  console.log(`zip-api is up and running on ${PORT}`);
});
