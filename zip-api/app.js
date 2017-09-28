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
  const zipRecords = zipdb.byZip[req.params.zipcode];
  if(zipRecords === undefined) {
  	res.sendStatus(404);
  } else {
  	res.json(zipRecords);
  }
});


app.get('/city/:cityname', (req, res) => {
  // fill in...
  const cityRecords = zipdb.byCity[req.params.cityname];
  if(cityRecords === undefined) {
  	res.sendStatus(404);
  } else {
  	res.json(cityRecords);
  }
});


app.listen(PORT, () => {
  console.log(`zip-api is up and running on ${PORT}`);
});
