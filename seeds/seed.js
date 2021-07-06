const sequelize = require('../config/connection')
const { User, Playlist } = require('../models')

const userData = require('./userData.json')
const PlaylistData = require('./PlaylistData.json')

const seedDatabase = async () => {
  await sequelize.sync({ force: true })

  const users = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true
  })

  for (const Playlist of PlaylistData) {
    await Playlist.create({
      ...Playlist,
      user_id: users[Math.floor(Math.random() * users.length)].id
    })
  }

  process.exit(0)
}

seedDatabase()
