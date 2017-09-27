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
  values = {}
  Cities =[];
  const zip = req.params.zipcode;

  for (var key in zipdb.byZip){
    if(key == zip){
      values =zipdb.byZip[key]
};}
for(i = 0; i <= values.length;i++)
{
  for(var key in values[i])
  {
    if(key == "City"){
      Cities.push(values[i][key]);
  
  }
  }
}

  res.send(Cities);
  //res.send();


});


app.get('/city/:cityname', (req, res) => {
  // fill in...
  values = [];
  const city = req.params.cityname;

  for(var key in zipdb.byCity)
  {
    if(key == city)
    {
        values.push(zipdb.byCity[key]);
    }
  }
  res.send(values);
});


app.listen(PORT, () => {
  console.log(`zip-api is up and running on ${PORT}`);
});
