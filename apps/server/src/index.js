// index.js
const express = require('express');
const app = express();
const { swaggerUi, swaggerSpec } = require('./config/swagger'); // Import Swagger UI and spec
const cookieParser = require('cookie-parser');
const projectRoutes = require('./routes/project');
const dotenv = require('dotenv');
const cors = require('cors');

const env = process.env.NODE_ENV || 'development';
dotenv.config({ path: `.env.${env}` });

app.use(express.json());
app.use(cookieParser());

app.use(cors());

// Serve the Swagger API docs
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.use('/api/projects', projectRoutes)
// Simple route
app.get('/', (req, res) => {
    res.send('Hello World!');
});

module.exports = app;
