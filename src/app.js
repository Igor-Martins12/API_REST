import dotenv from 'dotenv';
import { resolve } from 'path'
dotenv.config();

import './database';

import Express from "express";
import cors from 'cors'
//import helmet from 'helmet'

import HomeRoutes from './routes/HomeRoutes';
import userRoutes from './routes/userRoutes';
import tokenRoutes from './routes/tokenRoutes';
import alunoRoutes from './routes/alunoRoutes';
import FotoRoutes from './routes/FotoRoutes';

const whiteList = [
    'http://35.199.106.206:84',
    'http://localhost:3000',
    'http://localhost:3006',
  ];
   
  const corsOptions = {
    origin: function (origin, callback) {
      if(whiteList.indexOf(origin) !== -1 || !origin) {
        callback(null, true);
      } else {
        callback(new Error('Not allowed by CORS'));
      }
    }
  };

class App {
    constructor() {
        this.app = Express();
        this.middlewares();
        this.routes();
    }

    middlewares() {
        this.app.use(cors(corsOptions))
        //this.app.use(helmet({}))
        this.app.use(Express.urlencoded({ extended: true }));
        this.app.use(Express.json());
        this.app.use('/images/', Express.static(resolve(__dirname,'..','uploads','images')));

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