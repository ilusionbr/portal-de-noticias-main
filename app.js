const express = require('express')
const app = express()

var app = require('./config/server');

app.listen(3000, function(){
	console.log('servidor ON');
});
