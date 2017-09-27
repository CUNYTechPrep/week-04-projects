const express = require('express');
const app = express();

const zipdb = require('./zipData');

const PORT = process.env.PORT || 8000;


// console.log(zipdb.byCity);

app.get('/zip/:zipcode', (req, res) => {
  // fill in...
  const zip = req.params.zipcode;
  results = zipsdb.byZip[zip];
  res.json(zip);
});

app.get('/city/:cityname', (req, res) => {
  // fill in...
  const city = req.params.cityname.toUpperCase;
  results = zipsdb.byCity[city];
  res.json(city);
});


app.listen(PORT, () => {
  console.log(`zip-api is up and running on ${PORT}`);
});
