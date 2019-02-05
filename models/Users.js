module.exports = (sequelize, type) => {
    return sequelize.define('users', 
        {
            id: {
                type: type.INTEGER,
                primaryKey: true,
                autoIncrement: true,
                allowNull: false
            },
            name: {
                type: type.STRING,
                allowNull: false
            },
            surname: {
                type: type.STRING,
                allowNull: false
            },
            birthdate: {
                type: type.DATEONLY,
                allowNull: true
            },
            login: {
                type: type.STRING,
                allowNull: false,
                unique: true
            },
            password: {
                type: type.STRING,
                allowNull: false
            },
            roleid: {
                type: type.INTEGER,
                allowNull: false
            },
            deleted: {
                type: type.TINYINT(1),
                allowNull: false
            }
        },
        {
            timestamps: false,
            freezeTableName: true
        }
    )
}
