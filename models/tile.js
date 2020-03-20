const { Sequelize, DataTypes, Model } = require('sequelize');
const sequelize = new Sequelize('hag', 'root', 'root', {
    dialect: 'mysql',
    host: 'localhost',
});

const Character = require('./character');
const Campaign = require('./campaign');

async () => {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}

class Tile extends Model { }
Tile.init({
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    tileName: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: ''
    },
    tileColor: {
        type: DataTypes.STRING,
        allowNull: true,
        defaultValue: 'green'
    },
    campaign: {
        type: DataTypes.INTEGER,
        allowNull: true,
        key: true
    },
    xAxis: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    yAxis: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
},
    {
        timestamps: false,
        tableName: 'tile',
        sequelize,
        modelName: 'Tile',

    });

Tile.belongsTo(Campaign, { foreignKey: 'campaign', targetKey: 'id' });


// Tile.sync({ alter: true });

module.exports = Tile;