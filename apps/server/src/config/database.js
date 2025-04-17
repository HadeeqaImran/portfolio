const mongoose = require('mongoose');

const connectToDatabase = async () => {
    return mongoose.connect('mongodb://localhost:27017/portfolio');
};

module.exports = connectToDatabase;
