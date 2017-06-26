var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var db = require('./server/database/database');
var jwt = require('jsonwebtoken');

process.env.SECRET = "PROYECTO CRONOS...INICIADO";

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use('/client', express.static(__dirname + '/client'));

var clientController = require('./server/controllers/client-controller.js');

//API
var clientEstatus = require('./server/api/clientEstatus');
var editOrder = require('./server/api/editOrder');

app.use('/api/client/estatus', clientEstatus);
app.use('/api/client/edit_materials', editOrder);

//Routes
app.get('/', function(req, res){
	res.sendFile(__dirname + '/client/index.html');
})

app.post('/api/client/login', clientController.logIn);

db.sync().then(function(){
	app.listen(8050, function(){
		console.log("Conexion establecida con el puerto 8050");
	})
})