const mongoose = require('mongoose');

const connectToDatabase = async () => {
    return mongoose.connect(process.env.MONGO_DB_URL, {
        serverApi: {
            version: '1', // MongoDB Server API v1
            strict: true,
            deprecationErrors: true,
        },
        socketTimeoutMS: 10000, // Timeout for socket
        serverSelectionTimeoutMS: 5000,
        tlsAllowInvalidCertificates: true,
    }); // Timeout for server selection});
};

module.exports = connectToDatabase;
