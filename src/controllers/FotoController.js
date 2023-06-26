import multer from 'multer';
import multerConfig from "../config/multerConfig";

import Foto from '../models/Foto';

import Aluno from '../models/Alunos';

const upload = multer(multerConfig).single('foto');

class FotoController {
  store(req, res) {
    return upload(req, res, async (error) => {
      if (error) {
        return res.status(400).json({
          errors: [error.code],
        });
      }
      try {
        const { originalname, filename } = req.file;
        const { aluno_id } = req.body    
        const aluno = await Aluno.findByPk(aluno_id);
        if (!aluno) {
          return res.status(400).json({
            errors: ['Aluno não encontrado'],
          });
        }
        const foto = await Foto.create({ originalname, filename, aluno_id })

        return res.json(foto);

      } catch (e) {
        return res.status(400).json({
          errors: ['Aluno não existe'],
        });

      }

    });
  }
}

export default new FotoController();