const express = require('express');
const app = express();

const zipdb = require('./zipData');

const PORT = process.env.PORT || 8000;


//console.log(zipdb.byZip);


app.get('/', (req, res) => {
  res.json({test: 'Yay'});
});


app.get('/zip/:zipcode', (req, res) => {
  const records = zipdb.byZip[req.params.zipcode];
  if (records === undefined)
    res.sendStatus(404);
  else
    res.json(records);
});


app.get('/city/:cityname', (req, res) => {
  const records = zipdb.byCity[req.params.cityname.toUpperCase()];
  if (records === undefined)
    res.sendStatus(404);
  else
    res.json(records);
});


app.listen(PORT, () => {
  console.log(`zip-api is up and running on ${PORT}`);
});
