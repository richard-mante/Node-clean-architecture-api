import express from 'express'
import { ErrorHandler } from './interfaces/middlewares/ErrorHandler';
import { bookRoutes } from './interfaces/routes/CarRoutes';

const app = express();

app.use(express.json())
app.use('/api',bookRoutes)
app.use(ErrorHandler)