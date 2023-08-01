import { Response, Request, NextFunction } from "express";
import authService from "../service/auth.service";
import generateAccessToken from "../service/token.service";

class AuthController {
  async register(req: Request, res: Response, next: NextFunction) {
    try {
      const user = await authService.register(req.body);
      if (user) {
        return res.status(201).json({message : "Пользователь зарегистрирован", userId: user.id});
      } else {
        return res.status(201).json({message : "Пользователь c таким email уже зарегистрирован"});
      }
    } catch (e) {
      next(e);
    }
  }

  async login(req: Request, res: Response, next: NextFunction) {
    try {
      const user = await authService.login(req.body);
      if (user) {
        generateAccessToken(user.id, user.role, res);
      } else {
        return res.status(200).json({message : "Неверный логин или пароль!"});
      }
    } catch (e) {
      next(e);
    }
  }
  
}

export default new AuthController();