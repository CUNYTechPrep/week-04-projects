const express = require('express'); // see in all express
const app = express(); // see in all express

const zipdb = require('./zipData'); //importing a file that I created 
const citydb = require('./zipData'); //importing a file that I created 

const PORT = process.env.PORT || 8000; //quick check


// console.log(zipdb.byCity);


app.get('/', (req, res) => {
  res.json({test: 'Yay'});
});


app.get('/zip/:zipcode', (req, res) => {
  const records = zipdb.byZip[req.params.zipcode]; 
  if(records === undefined){
  	res.sendStatus(404); // if not found send error
  }else{
  	res.json(records); //if found send records as json
  }
});


app.get('/city/:cityname', (req, res) => {
    const records = citydb.byCity[req.params.cityname]; 
  if(records === undefined){
  	res.sendStatus(404); // if not found send error
  }else{
  	res.json(records); //if found send records as json
  }
});


app.listen(PORT, () => {
  console.log(`zip-api is up and running on ${PORT}`);
});
