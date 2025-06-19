import connectdb from "./config/db.js";
import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
import userRouter from './routes/UserRoutes.js';

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json())
connectdb();

app.use(express.json());

app.use('/api', userRouter);

app.listen(process.env.PORT || 5000, () =>
  console.log(`Server running on port ${process.env.PORT || 5000}`)
);