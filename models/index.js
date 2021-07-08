const User = require('./User');
const Playlist = require('./Playlist');
const Song = require ("./Song")
const Server = require ('../server')

User.hasMany(Playlist, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
})

Playlist.belongsTo(User, {
  foreignKey: 'user_id'
})

Playlist.hasMany(Song, {
  foreignKey: "user_id"
});


module.exports = { User, Playlist, Song }