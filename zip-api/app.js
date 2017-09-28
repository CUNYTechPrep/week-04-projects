const express = require('express');
const app = express();

const zipdb = require('./zipData');

const PORT = process.env.PORT || 8000;

app.get('/', (req, res) => {
  res.json({test: 'Yay'});
  
});


app.get('/zip/:zipcode', (req, res) => {
  // fill in...
  const info = zipdb.byZip[req.params.zipcode];
  res.json(info);
});


app.get('/city/:cityname', (req, res) => {
  // fill in...
	const info = zipdb.byCity[req.params.cityname];
	res.json(info);
	
});


app.listen(PORT, () => {
  console.log(`zip-api is up and running on ${PORT}`);
});
