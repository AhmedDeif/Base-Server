import bcrypt from 'bcrypt-nodejs';

module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('User', {
        username: DataTypes.STRING,
        email: DataTypes.STRING,
        password: DataTypes.STRING,
    });

    User.beforeCreate(async (model) => {
        bcrypt.genSalt(10, (err, salt) => {
            const hasedpassword = bcrypt.hashSync(model.password, salt);
            model.password = hasedpassword;
        });
    });
    return User;
};
