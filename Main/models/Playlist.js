const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Playlist extends Model { }

Playlist.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        description: {
            type: DataTypes.STRING,
        },
        date_created: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: DataTypes.NOW,
        },
        songs: [{
            id: {
                type: DataTypes.INTEGER,
                allowNull: false,
                primaryKey: true,
                autoIncrement: true,
            },
            name: {
                type: datatype.STRING,
                allowNull: false,


            },
            genere: {
                type: datatype.STRING,
                allowNull: false,
            },
            artist: {
                type: datatype.STRING,
                allowNull: false,
            }

        }],
        user_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'user',
                key: 'id',
            },
        },
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'playlist',
    }
);

module.exports = Playlist;
