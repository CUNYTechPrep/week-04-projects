const express = require('express');
const app = express();

const zipdb = require('./zipData');

const PORT = process.env.PORT || 8000;


// console.log(zipdb.byCity);


app.get('/', (req, res) => {
  res.json({test: 'Yay'});
});


app.get('/zip/:zipcode', (req, res) => {
	const zip = req.params.zipcode;
	if (zipdb.byZip[zip] !== undefined) {
		res.json(zipdb.byZip[zip]);
	} else {
		res.status(404).send("Not Found.");
	}
});


app.get('/city/:cityname', (req, res) => {
	// Why not do this? Why not just do the 
	const city = req.params.cityname.toUpperCase();
	if (zipdb.byCity[city] !== undefined) {
		res.json(zipdb.byCity[city]);
	} else {
		res.status(404).send("Not Found.");
	}
});

app.listen(PORT, () => {
  console.log(`zip-api is up and running on ${PORT}`);
});
