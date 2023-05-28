import Aluno from '../models/Alunos';

class HomeController {
  async index(req, res) {
      const novoAluno = await Aluno.create({
        nome: 'Igor',
        sobrenome: 'Martins',
        email: 'Igorjose07@hotmail.com',
        idade:23,
        peso: 300,
        altura: 2.5,
      });
        res.json({novoAluno});
    }
}

export default new HomeController();