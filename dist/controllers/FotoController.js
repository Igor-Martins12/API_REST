"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _multer = require('multer'); var _multer2 = _interopRequireDefault(_multer);
var _multerConfig = require('../config/multerConfig'); var _multerConfig2 = _interopRequireDefault(_multerConfig);

var _Foto = require('../models/Foto'); var _Foto2 = _interopRequireDefault(_Foto);

var _Alunos = require('../models/Alunos'); var _Alunos2 = _interopRequireDefault(_Alunos);

const upload = _multer2.default.call(void 0, _multerConfig2.default).single('foto');

class FotoController {
  store(req, res) {
    return upload(req, res, async (error) => {
      if (error) {
        return res.status(400).json({
          errors: [error.code],
        });
      }
      try {
        const { originalname, filename, url } = req.file;
        const { aluno_id } = req.body    
        const aluno = await _Alunos2.default.findByPk(aluno_id);
        if (!aluno) {
          return res.status(400).json({
            errors: ['Aluno não encontrado'],
          });
        }
        const foto = await _Foto2.default.create({ originalname, filename, aluno_id, url})

        return res.json(foto);

      } catch (e) {
        return res.status(400).json({
          errors: ['Aluno não existe'],
        });

      }

    });
  }
}

exports. default = new FotoController();