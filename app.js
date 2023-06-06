import dotenv from 'dotenv';
dotenv.config();

import './src/database';
import Express from "express";
import HomeRoutes from './src/routes/HomeRoutes';
import userRoutes from './src/routes/userRoutes';
import tokenRoutes from './src/routes/tokenRoutes';
import alunoRoutes from './src/routes/alunoRoutes';

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
        this.app.use('/tokens/', tokenRoutes);
        this.app.use('/alunos/', alunoRoutes);

    }
}
export default new App().app;