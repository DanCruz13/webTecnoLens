var express = require('express');
var router = express.Router();
var db = require('../database/database');
var bodyParser = require('body-parser');
var jwt = require('jsonwebtoken');

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({extended: true}))

router.use(function(req, res, next){
	var token = req.headers['auth-token'];
	console.log(token);
	jwt.verify(token, process.env.SECRET, function(err, decoded){
		if (err){
			res.status(400).send("El token es invalido");
		} else {
			req.user_id = decoded.id_cliente;
			next();
		}
	})
});

//GET ENDPOINTS

//POST ENDPOINTS
router.post('/request_userData', function(req, res){
	var query = "SELECT nombre_cliente, ape_p, ape_m, rfc, direccion, telefono, razon_social, nomb_usuario, contraseña, correo FROM cliente c INNER JOIN usuarios u ON c.id_cliente = u.id_cliente WHERE c.id_cliente = " + req.user_id + ";";

	db.query(query).spread(function(result, metadata){
		res.json({
			userData: result
		})
	}).catch(function(err){
		res.status(500).send("Imposible procesar la peticion.");
	})
});

module.exports = router;