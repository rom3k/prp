module.exports = (sequelize, type) => {
    return sequelize.define('roles', 
    {
        id: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        rolename: {
            type: type.STRING,
            allowNull: false
        }
    },
    {
        timestamps: false,
        freezeTableName: true
    }
    )
}