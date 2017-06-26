var db = require('../database/database');
var jwt = require('jsonwebtoken');

module.exports.logIn = function(req, res){
	var password = req.body.password;
	var query = "SELECT * FROM usuarios WHERE nomb_usuario ='" + req.body.loginName + "' OR correo ='" + req.body.loginName + "'";
	db.query(query).spread(function(result, metadata){
		console.log("Funcion ejecutada");
		if (result.length > 0){
			var userData = result[0];
			if (userData.acceso == true){
				console.log("Este men tiene acceso a la plataforma web");
				if (password == userData.contraseña){
					var token = jwt.sign(userData, process.env.SECRET, {
						expiresIn: 60 * 60 * 24
					})

					delete userData.contraseña;
					res.json({
						userData: userData,
						token: token
					})
					console.log("Contraseña correcta!!");
				} else {
					res.json({
						userPassword: false
					})
					res.status(400).send("Contraseña incorrecta.");
				}
			} else {
				res.json({
					userAccess: userData.acceso
				})
			}
		} else 
			res.json({
				userName: false
			})
	}).catch(function(err){
		console.log(err);
		res.status(500).send("Imposible procesar la peticion.");
	})
}