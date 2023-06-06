import Aluno from '../models/Alunos';

class AlunoController {
  async index(req, res) {
    const alunos = await Aluno.findAll();
      res.json(alunos);
    }
}

export default new AlunoController();