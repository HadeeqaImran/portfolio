// index.js
const express = require('express');
const app = express();
const { swaggerUi, swaggerSpec } = require('./config/swagger'); // Import Swagger UI and spec
const userRoutes = require('./routes/user');
const authRoutes = require('./routes/auth');
const orderRoutes = require('./routes/order');
const cookieParser = require('cookie-parser');
const passport = require('passport');

const dotenv = require('dotenv');

const env = process.env.NODE_ENV || 'development';
dotenv.config({ path: `.env.${env}` });

require('./config/passport');

app.use(passport.initialize());
app.use(express.json());
app.use(cookieParser());

// Serve the Swagger API docs
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// Auth routes
app.use('/api/auth', authRoutes);

// User routes
app.use('/api/users', userRoutes);

// Order Routes
app.use('/api/orders', orderRoutes);

// Simple route
app.get('/', (req, res) => {
    res.send('Hello World!');
});

module.exports = app;
