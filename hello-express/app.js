const express =require('express');  /* like java import */

const app = express(); // calling the function 'express', give you all the route matches when we created 

app.get('/',(req,res) => { // req means request, res means response, when getting the request, send this function response
							// it will shows the path when path is empty
	res.send('Hello World'); // we will just send hello wrold as my response
	//res.json(myData);
});

app.get('/ctp',(req,res) => { //this tells us the next path for ctp
	res.sendStatus(404).send('Hello World, Student'); 
});


app.listen(8000, ()=> { // the front will have localhost/
	console.log('App Server started!');
});

//then go to terminal press "node app.js"
//ctrl + c to exit the server
// everytime we make changing, need to reload the server again