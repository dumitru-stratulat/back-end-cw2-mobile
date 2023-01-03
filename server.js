//Import the express and url modules
const express = require('express');

//The express module is a function. When it is executed it returns an app object
const app = express();

//Serve up everything in public
app.use(express.static('public'));

app.use(function(req, res, next) {
	res.header('Access-Control-Allow-Origin', '*');
	res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, authorization');
	res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
	next();
});

app.get('/lessons', (request, response) => {
	const products = [
		{  
			id: 1005,
			topic: "English",
			price: "95",
			location: "Wellington"
		},
		{  
			id: 1006,
			topic: "English",
			price: "95",
			location: "z"
		},
	]
	response.json(products);
});
app.get('/users', (request, response) => {
	const users = [
		{  
			id: 1005,
			username: "Michael",
			email: "random@gmail.com",
			password: "password",
		},
		{  
			id: 106,
			username: "Jordan",
			email: "random2@gmail.com",
			password: "password",
		},
	]
	response.json(users);
});

//Start the app listening on port 8080
app.listen(8080);
console.log('Server listening on port 8080');


//Export server for testing
module.exports = app;
