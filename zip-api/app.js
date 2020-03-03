const express = require('express');
const app = express();

const zipdb = require('./zipData');

const PORT = process.env.PORT || 8000;


// console.log(zipdb.byCity);


app.get('/', (req, res) => {
  res.json({test: 'Yay'});
});


app.get('/zip/:zipcode', (req, res) => {
  // fill in...
  const zip = zipdb.byZip[req.params.zipcode];
  if(zip === undefined) {
  	res.sendStatus(404);
  } 
  else {
  	res.json(zip);
  }
});


app.get('/city/:cityname', (req, res) => {
  // fill in...
  const city = zipdb.byCity[req.params.cityname];
  if(city === undefined) {
  	res.sendStatus(404);
  } 
  else {
  	res.json(city);
  }
});


app.listen(PORT, () => {
  console.log(`zip-api is up and running on ${PORT}`);
});
