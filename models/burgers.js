//// Import Sequelize library
module.exports = function(sequelize, DataTypes) {

    // Creates burger model with column names id, burger_name, devoured, and with a timestamp
    var burger = sequelize.define("burger", {
        id: {
            autoIncrement: true,
            type: DataTypes.INTEGER,
            primaryKey: true
        },
        burger_name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        devoured: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false,
        }
    }, {
        timestamps: true,
        createdAt: true
    });

    // returns the model we just defined
    return burger;
};
