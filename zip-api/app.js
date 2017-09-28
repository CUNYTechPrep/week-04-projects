const express = require('express');
const app = express();

const zipdb = require('./zipData');

const PORT = process.env.PORT || 8000;


//console.log(zipdb.byCity);


app.get('/', (req, res) => {
  res.json({test: 'Yay'});
});


app.get('/zip/:zipcode', (req, res) => {
  // fill in...
  const zipInfo = zipdb.byZip[req.params.zipcode];
  if (zipInfo === undefined){
  	res.sendStatus(404);
  } else {
  	res.json(zipInfo);
  }

});


app.get('/city/:cityname', (req, res) => {
  // fill in...
  const cityInfo = zipdb.byCity[req.params.cityname];
  if (cityInfo === undefined){
  	res.sendStatus(404);
  }else{
  	res.json(cityInfo);
  }
});


app.listen(PORT, () => {
  console.log(`zip-api is up and running on ${PORT}`);
});
