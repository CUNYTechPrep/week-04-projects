const express = require('express');
const app = express();

const zipdb = require('./zipData');

const PORT = process.env.PORT || 8000;


app.get('/', (req, res) => {
  res.json({test: 'Yay'});
});


app.get('/zip/:zipcode', (req, res) => {
  let zipcodeInput = req.params.zipcode;
  let result = zipdb.byZip[zipcodeInput];
  if (result !== undefined){
    res.json(result);
  }
  else{
    res.status(404).send('Not Found');
  }
});


app.get('/city/:cityname', (req, res) => {
  let cityNameInput = req.params.cityname;
  let result = zipdb.byCity[cityNameInput];
  if (result !== undefined){
    res.json(result);
  }
  else{
    res.status(404).send('Not Found');
  }
});


app.listen(PORT, () => {
  console.log(`zip-api is up and running on ${PORT}`);
});
