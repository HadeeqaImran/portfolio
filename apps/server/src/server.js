const connectToDatabase = require('./config/database');
const app = require('./index');

(async () => {
    await connectToDatabase();
    console.log('Connected to database');
    const port = 3000;

    app.listen(port, () => {
        console.log(`Server is running on http://localhost:${port}`);
    });
})();
