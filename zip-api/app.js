const express = require('express');
const app = express();

const zipdb = require('./zipData');

const PORT = process.env.PORT || 8000;


// console.log(zipdb.byCity);


app.get('/', (req, res) => {
  res.json({test: 'Yay'});
});


app.get('/zip/:zipcode', (req, res) => {
  let zip = zipdb[req.params.zipcode];
  if (zip) {
  	res.json(zip);
  } else {
  	res.send(404);
  }
});


app.get('/city/:cityname', (req, res) => {
  let city = zipdb[req.params.cityname];
  if (city) {
  	res.json(city);
  } else {
  	res.send(404);
  }
});


app.listen(PORT, () => {
  console.log(`zip-api is up and running on ${PORT}`);
});
