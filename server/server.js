import connectdb from "./config/db.js";
import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
import userRouter from './routes/UserRoutes.js';

dotenv.config();
const app = express();

const allowedOrigins = process.env.NODE_ENV === 'production'
  ? ['https://dev-s-corner-1.onrender.com']
  : ['http://localhost:5173'];


app.use(cors({
  origin: allowedOrigins,
  methods: ['GET', 'POST'],
  credentials: true
}));

app.use(express.json())
connectdb();

app.use('/api', userRouter);

app.listen(process.env.PORT || 5000, () =>
  console.log(`Server running on port ${process.env.PORT || 5000}`)
);