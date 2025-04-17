// server/index.js
require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

// Connect to MongoDB
// mongoose.connect(process.env.MONGO_URI);

// Routes
app.get('/', (req, res) => res.send('API Running'));

app.listen(5000, () => console.log('Server started on port 5000'));
