const sequelize = require('../config/connection');
const { User, Playlist } = require('../models');

const userData = require('./userData.json');
const playlistData = require('./playlistData.json');

const seedDatabase = async () => {
    await sequelize.sync({ force: true });

    const users = await User.bulkCreate(userData, {
        individualHooks: true,
        returning: true,
    });

    for (const playlist of playlistData) {
        await Playlist.create({
            ...playlist,
            user_id: users[Math.floor(Math.random() * users.length)].id,
        });
    }

    process.exit(0);
};

seedDatabase();
