var express = require('express');
var router = express.Router();
var db = require('../database/database');
var bodyParser = require('body-parser');
var jwt = require('jsonwebtoken');

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({extended: true}))

router.use(function(req, res, next){
	var token = req.headers['auth-token'];
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
router.post('/request_starterOrders', function(req, res){
	var query = "SELECT id_orden, folio, fecha_solicitud, status FROM orden WHERE id_cliente="+req.user_id+";";

	db.query(query).spread(function(result, metadata){
		res.json({
			orderData: result
		})
	}).catch(function(err){
		res.status(500).send("Imposible procesar la peticion.");
	});
});

router.post('/request_Allorders', function(req, res){
	var query = "SELECT o.id_orden, o.id_cliente, o.dip, o.alt, p.precio, o.status, d.nombre_dim, dor.dimenion, dor.ojo, t.nombre_tec, m.nombre, tm.nombre, pro.nombre, s.nombre_servicio "+
	"FROM orden o, producto p, producto_orden po, dimension_orden dor, dimension d, tecnologia t, material m, tipo_material tm, progresivos pro, servicio s, servicios_orden so "+
	"WHERE o.id_orden = po.id_orden AND po.id_producto = p.id_producto AND d.id_dimension = dor.id_dimension AND dor.id_orden = o.id_orden AND dor.ojo = po.ojo AND t.id_tecnologia = p.id_tecnologia "+
	"AND m.id_material = p.id_material AND tm.id_tipo_material = p.id_tipo_material AND pro.id_progresivos = p.id_progresivos AND s.id_servicio = so.id_servicio AND o.id_orden = so.id_orden "+
	"AND o.status = 'espera' ORDER BY o.id_orden";

	db.query(query).spread(function(result, metadata){
		res.json({
			orderData: result
		})
	}).catch(function(err){
		res.status(500).send("Imposible procesar la peticion.");
	})
});

module.exports = router;