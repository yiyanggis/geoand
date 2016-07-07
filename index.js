var express = require('express');
var db=require('./modules/dbconnection');
var app = express();

app.get('/', function (req, res) {
  	res.send('Hello World!');
});

app.get('/test', function (req, res) {
	var testdb=new db.dbModule();
	testdb.ConnecDB();
  	res.send('connect db');
});

app.get('/testQuery', function (req, res) {
	var testdb=new db.dbModule();
	testdb.GetArrest(1);
  	res.send('GetArrest');
});

app.listen(3000, function () {
  	console.log('Example app listening on port 3000!');
});