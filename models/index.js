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

playlist.hasMany(Song, {
  foreignKey: "Song_id"
})
Song.belongsToMany(Playlist, { through: Song })

module.exports = { User, Playlist, Song }
