'use strict';

import bcrypt from 'bcrypt-nodejs';

module.exports = (sequelize, DataTypes) => {

  	var User = sequelize.define('User', {
		username: DataTypes.STRING,
		email: DataTypes.STRING,
		password: DataTypes.STRING
	});

	User.beforeCreate(async function (model) {
		bcrypt.genSalt(10, function (err, salt) {
			const hasedpassword = bcrypt.hashSync(model.password, salt);
			model.password = hasedpassword;
		});
	})
  	return User;
};