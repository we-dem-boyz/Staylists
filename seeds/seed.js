const sequelize = require('../config/connection')
const { User, Playlist, Song} = require('../models')


const userData = require('./userData.json')
const playlistData = require('./playlistData.json')
const songData = require("./songData.json")


const seedDatabase = async () => {
  await sequelize.sync({ force: true })

  const users = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true
  })

  const songs = await Song.bulkCreate(songData, {
    individualHooks: true,
    returning: true
  })
  for (const playlist of playlistData) {
    await Playlist.create({
      ...playlist,
      user_id: users[Math.floor(Math.random() * users.length)].id,
      song_id: songs[Math.floor(Math.random() * songs.length)].id
    })
  }

  process.exit(0)
}

seedDatabase()
