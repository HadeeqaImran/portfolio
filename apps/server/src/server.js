const connectToDatabase = require('./config/database');
const app = require('./index');

(async () => {

    const envFile = process.env.NODE_ENV === 'production' ? '.env.staging' : '.env.development';
    dotenv.config({ path: envFile });

    await connectToDatabase();
    console.log('Connected to database');
    const port = 3000;

    app.listen(port, () => {
        console.log(`Server is running on http://localhost:${port}`);
    });
})();
