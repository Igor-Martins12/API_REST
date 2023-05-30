import dotenv from 'dotenv';
dotenv.config();

import './src/database';
import Express from "express";
import HomeRoutes from './src/routes/HomeRoutes';
import userRoutes from './src/routes/userRoutes';

class App {
    constructor() {
        this.app = Express();
        this.middlewares();
        this.routes();
    }

    middlewares() {
        this.app.use(Express.urlencoded({ extended: true }));
        this.app.use(Express.json());

    }
    routes() {
        this.app.use('/', HomeRoutes);
        this.app.use('/users/', userRoutes);

    }
}
export default new App().app;