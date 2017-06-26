var Sequelize = require('sequelize');
var sequelize = new Sequelize('postgresql://localhost/Test_TecnoLens',{
	dialect: 'postgres',
	dialectOptions: {
		ssl: {
			require: true
		}
	}
});

module.exports = sequelize;