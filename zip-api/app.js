const express = require('express');
const app = express();

const zipdb = require('./zipData');

const PORT = process.env.PORT || 8000;

// NOTE: DEBUG CODE
// console.log(zipdb.byCity);
// console.log(zipdb.byZip);


app.get('/', (req, res) => {
  res.json({test: 'Yay'});
});


app.get('/zip/:zipcode', (req, res) => {
  const zipcode = req.params.zipcode;
  if (zipdb.byZip.hasOwnProperty(zipcode))
    res.json(zipdb.byZip[zipcode]);
  else
    res.send('ERROR: NOT FOUND');
});


app.get('/city/:cityname', (req, res) => {
  const city = req.params.cityname.toUpperCase();
  if (zipdb.byCity.hasOwnProperty(city))
    res.json(zipdb.byCity[city]);
  else
    res.send('ERROR: NOT FOUND');
});


app.listen(PORT, () => {
  console.log(`zip-api is up and running on ${PORT}`);
});
