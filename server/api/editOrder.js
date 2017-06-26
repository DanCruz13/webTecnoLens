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

router.post('/request_materialsOrder', function(req, res){
	console.log(req.body);
	var query = "SELECT po.id_producto, po.ojo, m.nombre as nombre_mat, t.nombre_tec, tm.nombre as nombre_tm, pro.nombre as nombre_pro, ct.nombre as nombre_ct, ti.tono, ti.p_d "+ 
				"FROM producto_orden po, producto p, material m, tecnologia t, tipo_material tm, progresivos pro, tinte ti, color_tinte ct "+
				"WHERE po.id_producto = p.id_producto AND p.id_tecnologia = t.id_tecnologia AND p.id_material = m.id_material AND p.id_tipo_material = tm.id_tipo_material "+
				"AND p.id_progresivos = pro.id_progresivos AND p.id_tintes = ti.id_tinte AND ti.id_color_tinte = ct.id_color_tinte AND po.id_orden = " + req.body.id_orden + ";";

	db.query(query).spread(function(result, metadata){
		res.json({
			orderData: result
		})
	}).catch(function(err){
		res.status(500).send("Imposible procesar la peticion");
		console.log(err);
	})
	
});

router.get('/request_materials', function(req, res){
	var query = "SELECT id_material, nombre as nombre_mat FROM material;";
	db.query(query).spread(function(result, metadata){
		res.json({
			material: result
		})
	}).catch(function(err){
		res.status(500).send("Imposible procesar la peticion");
		console.log(err);
	})
});

router.get('/request_technologies', function(req, res){
	var query = "SELECT id_tecnologia, nombre_tec FROM tecnologia;";
	db.query(query).spread(function(result, metadata){
		res.json({
			tecnologia: result
		})
	}).catch(function(err){
		res.status(500).send("Imposible procesar la peticion");
		console.log(err);
	})
});

router.get('/request_typesMaterial', function(req, res){
	var query = "SELECT id_tipo_material, nombre FROM tipo_material;";
	db.query(query).spread(function(result, metadata){
		res.json({
			tiposM: result
		})
	}).catch(function(err){
		res.status(500).send("Imposible procesar la peticion");
		console.log(err);
	})
});

router.get('/request_progresives', function(req, res){
	var query = "SELECT id_progresivos, nombre FROM progresivos;";
	db.query(query).spread(function(result, metadata){
		res.json({
			progresivo: result
		})
	}).catch(function(err){
		res.status(500).send("Imposible procesar la peticion");
		console.log(err);
	})
});

router.get('/request_colorTinte', function(req, res){
	var query = "SELECT id_color_tinte, nombre FROM color_tinte;";
	db.query(query).spread(function(result, metadata){
		res.json({
			colorT: result
		})
	}).catch(function(err){
		res.status(500).send("Imposible procesar la peticion");
		console.log(err);
	})
});

module.exports = router;