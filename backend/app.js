import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import connectDB from './database/db.js';
import userRoutes from './routes/user.routes.js';
import dotenv from 'dotenv';
dotenv.config();

import cookieParser from 'cookie-parser';
connectDB();

const app = express();
app.use(morgan('dev'));


app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());



app.get('/', (req, res) => {
    res.send('Hello World');
});

app.use( '/api/users', userRoutes);

export default app;

