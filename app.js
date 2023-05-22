import Express from "express";
import HomeRoutes from './src/routes/HomeRoutes';

class App {
    constructor() {
        this.app = Express();
        this.middlewares();
        this.routes();
    }

    middlewares() {
        this.app.use(Express.urlencoded({extended: true}));
        this.app .use(Express.json());

    }
    routes() {
        this.app.use('/', HomeRoutes);

    }
}
export default new App().app;