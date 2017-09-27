const express = require('express');
const app = express();

const zipdb = require('./zipData');

const PORT = process.env.PORT || 8000;


 console.log(zipdb.byCity);


app.get('/', (req, res) => {
  res.json({test: 'Yay'});
});


app.get('/zip/:zipcode', (req, res) => {
  // returns all information associated with that zipcode
  const zip = zipdb.byZip[req.params.zipcode];
  if(zip == undefined)
    res.sendStatus(404);
  else
    res.json(zip);


});


app.get('/city/:cityname', (req, res) => {
  // return json object containing all zip codes in that city
  // will only accept uppercase 
  const city = zipdb.byCity[req.params.cityname.toUpperCase()];
  if(city == undefined)
    res.sendStatus(404);
  else
    res.json(city);
});


app.listen(PORT, () => {
  console.log(`zip-api is up and running on ${PORT}`);
});
