import  Jwt from "jsonwebtoken";
import user from "../models/User";
import User from "../models/User";

export default async (req, res, next) => {
  const {authorization} = req.headers;

  if(!authorization) {
    return res.status(401).json({
        errors: ["Login required"],
    });
  }
  const [texto , token ] = authorization.split(' ');
  
  try {
      const dados = Jwt.verify(token, process.env.TOKEN_SECRET);
      const { id, email} = dados;
      const user = await User.findOne({
        where: {
          id,
          email,
        },
      });

      if(!user) { 
        return res.status(401).json({ 
          errors: ['Úsuário inválido'],
        });
      }

      req.userId = id;
      req.userEmail = email;
      return next();
  } catch (e) {
      return res.status(401).json({
          errors: ["Token expirado ou inválido."]
      });
    }
};
