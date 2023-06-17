import dotenv from 'dotenv';
import { resolve } from 'path'
dotenv.config();

import './src/database';

import Express from "express";

import HomeRoutes from './src/routes/HomeRoutes';
import userRoutes from './src/routes/userRoutes';
import tokenRoutes from './src/routes/tokenRoutes';
import alunoRoutes from './src/routes/alunoRoutes';
import FotoRoutes from './src/routes/FotoRoutes';

class App {
    constructor() {
        this.app = Express();
        this.middlewares();
        this.routes();
    }

    middlewares() {
        this.app.use(Express.urlencoded({ extended: true }));
        this.app.use(Express.json());
        this.app.use(Express.static(resolve(__dirname, 'uploads')));

    }
    routes() {
        this.app.use('/', HomeRoutes);
        this.app.use('/users/', userRoutes);
        this.app.use('/tokens/', tokenRoutes);
        this.app.use('/alunos/', alunoRoutes);
        this.app.use('/fotos/', FotoRoutes);

    }
}
export default new App().app;