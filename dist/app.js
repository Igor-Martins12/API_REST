"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _dotenv = require('dotenv'); var _dotenv2 = _interopRequireDefault(_dotenv);
var _path = require('path');
_dotenv2.default.config();

require('./database');

var _express = require('express'); var _express2 = _interopRequireDefault(_express);
var _cors = require('cors'); var _cors2 = _interopRequireDefault(_cors);
// import helmet from 'helmet'

var _HomeRoutes = require('./routes/HomeRoutes'); var _HomeRoutes2 = _interopRequireDefault(_HomeRoutes);
var _userRoutes = require('./routes/userRoutes'); var _userRoutes2 = _interopRequireDefault(_userRoutes);
var _tokenRoutes = require('./routes/tokenRoutes'); var _tokenRoutes2 = _interopRequireDefault(_tokenRoutes);
var _alunoRoutes = require('./routes/alunoRoutes'); var _alunoRoutes2 = _interopRequireDefault(_alunoRoutes);
var _FotoRoutes = require('./routes/FotoRoutes'); var _FotoRoutes2 = _interopRequireDefault(_FotoRoutes);

const whiteList = [
    'http://35.199.106.206:84/',
    'http://localhost:3000',
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
        this.app = _express2.default.call(void 0, );
        this.middlewares();
        this.routes();
    }

    middlewares() {
        this.app.use(_cors2.default.call(void 0, corsOptions))
       // this.app.use(helmet({
        //  crossOriginEmbedderPolicy: false,
      //  }))
        this.app.use(_express2.default.urlencoded({ extended: true }));
        this.app.use(_express2.default.json());
        this.app.use('/images/', _express2.default.static(_path.resolve.call(void 0, __dirname,'..','uploads','images')));

    }
    routes() {
        this.app.use('/', _HomeRoutes2.default);
        this.app.use('/users/', _userRoutes2.default);
        this.app.use('/tokens/', _tokenRoutes2.default);
        this.app.use('/alunos/', _alunoRoutes2.default);
        this.app.use('/fotos/', _FotoRoutes2.default);

    }
}
exports. default = new App().app;