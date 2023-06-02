import User from '../models/User';

class UserController {
  async store(req, res) {
    try {

      const novoUser = await User.create(req.body);
      return res.json(novoUser);

    } catch (e) {

      return res.status(400).json({
        errors: e.errors.map((err) => err.message)

      });
    }
  }
  async index(req, res) {
    try {

      const users = await User.findAll();
      console.log('User ID', req.userId)
      console.log('User EMAIL', req.userEmail)
      return res.json(users);

    } catch (e) {
      return res.json(null);
    }
  }

  // show
  async show(req, res) {
    try {
      const user = await User.findByPk(req.params.id);
      return res.json(user);

    } catch (e) {
      return res.json(null);
    }
  }
  // update
  async update(req, res) {
    try {
      if (!req.params.id) {
        return res.status(400).json({
          errors: ['ID nao enviado.']
        });
      }

      const user = await User.findByPk(req.params.id);

      if (!user) {
        return res.status(400).json({
          errors: ['Usuário nao existe'],
        });
      }

      const novosDados = await user.update(req.body);
      return res.json(user);

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
          errors: ['ID nao enviado.']
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