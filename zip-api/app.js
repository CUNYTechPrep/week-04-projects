const express = require('express');
const app = express();

const zipdb = require('./zipData');

const PORT = process.env.PORT || 8000;


// console.log(zipdb.byCity);
app.get('/', (req, res) => {
	
  res.json({test: 'Hello World'});
	
});


app.get('/zip/:zipcode', (req, res) => {
  // fill in...
  const zip = req.params.zipcode;
  results = zipdb.byZip[zip];
  res.json(results);
  
  //Next, we call the object constructor to iterate through the for loop
  /*
  Object.keys(zipdb.byZip).forEach(zipCodeElement => res.json(
  {
  	if(zip == zipCodeElement){
  		res.json(zip);
  	}
  });
  */

  
});

app.get('/city/:cityname', (req, res) => {
  // fill in...
  const city = req.params.cityname;
  results = zipdb.byCity[city];
  records = results.toUpperCase; // I didn't use this line of code

  res.json(results);
/*
  Object.keys(zipdb.byCity).forEach(cityElement => res.json(
  {
  	if(city == cityElement){
  		res.json(zip);
  	}
  });
  */
  
});


app.listen(PORT, () => {
  console.log(`zip-api is up and running on ${PORT}`);
});
