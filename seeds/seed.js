const seedDrink = require('./drink-seeds');
const seedUser = require('./user-seeds');
const seedShops = require('./shop-seeds');
const seedReviews = require('./review-seeds')

const sequelize = require('../config/connection');

const seedAll = async() => {
    await sequelize.sync({ force: true });
    console.log('\n----- DATABASE SYNCED -----\n');

    await seedUser();
    console.log('\n----- USERS SEEDED -----\n');

    await seedDrink();
    console.log('\n----- DRINKS SEEDED -----\n');

    await seedShops();
    console.log('\n----- SHOPS SEEDED -----\n');

    await seedReviews();
    console.log('\n----- REVIEWS SEEDED -----\n');

    process.exit(0);
};

seedAll();