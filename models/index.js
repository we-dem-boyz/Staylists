const User = require('./User');
const playlist = require('./Playlist');
const Song = require ("./Song")
User.hasMany(playlist, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
})

playlist.belongsTo(User, {
  foreignKey: 'user_id'
})

Playlist.hasMany(Song, {
  foreignKey: "user_id"
});


module.exports = { User, Playlist, Song }