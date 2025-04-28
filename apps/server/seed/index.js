const mongoose = require('mongoose');
const seedProjects = require('./project');
const seedTechnologies = require('./technology');
const connectToDatabase = require('../src/config/database');
const dotenv = require('dotenv');

const runAllSeeders = async () => {
    try {
        const envFile = process.env.NODE_ENV === 'production' ? '.env.production' : '.env.development';
        dotenv.config({ path: envFile });

        console.log("envFile", envFile);
        console.log("MONGO_DB_URL", process.env.MONGO_DB_URL);

        await connectToDatabase();
        console.log('Connected to DB');

        await seedTechnologies();
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
 