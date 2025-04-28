import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import mongoose from 'mongoose';
import routes from './routes/index.js';

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());
app.use('/api', routes);

export default app;
