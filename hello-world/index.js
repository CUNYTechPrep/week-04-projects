const express = require('express');

const app = express();

app.get('/', (req, res) => {
	res.send('Hello World');
})

app.get('/ctp', (req, res) => {
	res.send('Hello CTP STudents!!!');
});

app.listen(8000, () => {
	console.log('App Server Started!');
});