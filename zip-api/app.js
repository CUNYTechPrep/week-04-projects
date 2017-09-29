const express = require('express');
const app = express();

const zipdb = require('./zipData');

const PORT = process.env.PORT || 8000;


// console.log(zipdb.byCity);


app.get('/', (req, res) => {
  res.json({test: 'Hello'});
});


app.get('/zip/:zipcode', (req, res) => {
  const zip = req.params.zipcode;
  output = zipdb.byZip[zip];
  res.json(output);
});


app.get('/city/:cityname', (req, res) => {
  const city = req.params.cityname;
  output = zipdb.byCity[city];
  res.json(output);
});


app.listen(PORT, () => {
  console.log(`zip-api is up and running on ${PORT}`);
});
