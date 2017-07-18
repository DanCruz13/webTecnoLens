var Sequelize = require('sequelize');
var sequelize = new Sequelize('postgresql://localhost/Test_TecnoLens',{
	dialect: 'postgres',
	dialectOptions: {
		ssl: {
			require: true
		}
	}
});
// postgresql://tecnol.cffap7hiyzg1.us-east-2.rds.amazonaws.com/Test_TecnoLens
module.exports = sequelize;