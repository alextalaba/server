const { Sequelize, DataTypes, Model } = require('sequelize');
const sequelize = new Sequelize('hag', 'root', 'root', {
    dialect: 'mysql',
    host: 'localhost',
});

async () => {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}

class Character extends Model { }
Character.init({
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    cls: {
        type: DataTypes.STRING,
        allowNull: false
    },
    spec: {
        type: DataTypes.STRING,
        allowNull: true
    },
    attack: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    health: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    currentHealth: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    imgIdle: {
        type: DataTypes.STRING,
        allowNull: true
    },
    imgAttack1: {
        type: DataTypes.STRING,
        allowNull: true
    },
    imgDead: {
        type: DataTypes.STRING,
        allowNull: true
    }

},
    {
        timestamps: false,
        tableName: 'character',
        sequelize,
        modelName: 'Character',

    });


// Character.sync({ alter: true });

module.exports = Character;