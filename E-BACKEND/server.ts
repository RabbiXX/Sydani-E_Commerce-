import express from 'express';
import type { Request, Response } from 'express';
import { sequelize } from './config/database.ts';
import dotenv from 'dotenv';
import cors from 'cors';
import errors from './middleware/errorHandler.ts';
import logger from './middleware/logger.ts';
import notFound from './middleware/notFound.ts';
import userRoute from './routes/userRoute.ts';
import productRoute from './routes/productRoute.ts';
import cartRoute from './routes/cartRoute.ts'; 
import orderRoute from './routes/orderRoute.ts';

dotenv.config();
const app = express();
const port = process.env.PORT || 9000;

app.use(express.json());
app.use(logger);
app.use(cors({
    origin: ['http://localhost:3000', 'https://localhost:3000'],
    credentials: true
}));

app.get('/', (req: Request, res: Response) => {
    res.send('Hello from the backend!');
});

// 1. Mount your routers FIRST
app.use('/api/v6/user', userRoute);
app.use('/api/v6/product', productRoute);
app.use('/api/v6/cart', cartRoute);
app.use('/api/v6/order', orderRoute);
// app.use('/api/v5', analyticsRoute); // Mounted at /api/v1 to match PRD base convention

// 2. Fallback & Error Handlers MUST go LAST (after all valid routes)
app.use(notFound);
app.use(errors);

const runServer = async () => {
    try {
        await sequelize.authenticate();
        console.log('Database connected successfully');

        await sequelize.sync({ alter: true });
        console.log('Models synchronized with database');

        const server = app.listen(Number(port), () => {
            console.log(`This project is running at ${port}`);
        });

        server.timeout = 300000;
        server.keepAliveTimeout = 300000;
    } catch (error) {
        console.error('Failed to start server!:', error);
        process.exit(1);
    }
};

runServer();