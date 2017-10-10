const express = require('express');
const app = express();

const zipdb = require('./zipData');

const PORT = process.env.PORT || 8000;


//console.log(zipdb.byCity);


app.get('/', (req, res) => {
  res.json({test: 'Yay'});
});


app.get('/zip/:zipcode', (req, res) => {
  const zip = req.params.zipcode;
  const results = zipdb.byZip[zip];

  if (results === undefined) {
  	res.sendStatus(404);
  } else {
  	res.json(results);
  }
});


app.get('/city/:cityname', (req, res) => {
  const city = req.params.cityname;
  const results = zipdb.byCity[city.toUpperCase()];

  if (results === undefined) {
  	res.sendStatus(404);
  } else {
  	res.json(results);
  }
});


app.listen(PORT, () => {
  console.log(`zip-api is up and running on ${PORT}`);
});
