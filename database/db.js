const Sequelize = require('sequelize');
var UserModel = require('../models/Users');
var RoleModel = require('../models/Roles');

const sequelize = new Sequelize('prp', 'root', '1234', {
    host: 'localhost',
    dialect: 'mysql',
    operatorsAliases: false,
    port: 3306,
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
});

const Users = UserModel(sequelize, Sequelize);
const Roles = RoleModel(sequelize, Sequelize);

Users.belongsTo(Roles, { foreignKey: 'roleid', targetKey: 'id'});

sequelize.sync()
    .then(() => {
        console.log('Successful sync');
    });

module.exports = {
    Users,
    Roles
};