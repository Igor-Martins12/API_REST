import User from '../models/User';

class UserController {
  async store(req, res) {
    try {

      const novoUser = await User.create(req.body);
      const { id, email, nome} = novoUser;
      return res.json({ id, email, nome});

    } catch (e) {

      return res.status(400).json({
        errors: e.errors.map((err) => err.message)

      });
    }
  }
  async index(req, res) {
    try {

      const users = await User.findAll({attributes: ['id', 'nome', 'email'] });
        return res.json(users);

    } catch (e) {
      return res.json(null);
    }
  }

  // show
  async show(req, res) {
    try {
      const user = await User.findByPk(req.params.id);
      const { id, nome, email } = user;
      return res.json({id, nome, email });

    } catch (e) {
      return res.json(null);
    }
  }
  // update
  async update(req, res) {
    try {
      if (!req.params.id) {
        return res.status(400).json({
          errors: ['Id nao existe.'],
        });
      }
      const user = await User.findByPk(req.params.id);

      if (!user) {
        return res.status(400).json({
          errors: ['Usuário nao existe'],
        });
      }

      const novosDados = await user.update(req.body);
      const { id, email, nome} = novosDados;
      return res.json({ id, email, nome});

    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message)
      })
    }

  }
  async delete(req, res) {
    try {
      if (!req.params.id) {
        return res.status(400).json({
          errors: ['Id nao existe.'],
        });
      }
      const user = await User.findByPk(req.params.id);
      
      if (!user) {
        return res.status(400).json({
          errors: ['Usuário nao existe'],
        });
      }

      await user.destroy();
      return res.json(user);
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message)
      })
    }

  }
}

export default new UserController();