const mongoose = require('mongoose');
const seedProjects = require('./project');
// const seedTechnologies = require('./technology');
const connectToDatabase = require('../src/config/database');

const runAllSeeders = async () => {
    try {
        await connectToDatabase();
        console.log('Connected to DB');

        // await seedTechnologies();
        await seedProjects();

        console.log('All seeders ran successfully');
    } catch (err) {
        console.error('Seeding failed:', err);
    } finally {
        await mongoose.disconnect();
        console.log('Disconnected from DB');
    }
};

runAllSeeders();
