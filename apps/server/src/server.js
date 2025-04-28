const connectToDatabase = require('./config/database');
const app = require('./index');
const dotenv = require('dotenv');
(async () => {
    const envFile =
        process.env.NODE_ENV === 'production'
            ? '.env.staging'
            : '.env.development';
    dotenv.config({ path: envFile });

    await connectToDatabase();
    console.log('Connected to database');
    const port = process.env.PORT || 3000;

    app.listen(port, '0.0.0.0', () => {
        console.log(`Server is running on http://localhost:${port}`);
    });
})();
