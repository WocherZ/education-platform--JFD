import { NextFunction, Request, Response } from "express";
import user from "../service/user.service";
import { IUser } from "../middlewares/user.middleware";

class Controller {
  async getById(req : Request, res: Response, next: NextFunction){
    try {
      const id = Number(req.params["id"]);
      if (Number.isInteger(id)) {
        const result = await user.getById(id);
        res.status(200).json({message: "success", result: result});
      } else {
        res.status(200).json({message: "Error, id is not integer"});
      }
    } catch (e) {
      next(e);
    }
  }   


  async getAll(req : Request, res: Response, next: NextFunction){
    try {
        const result = await user.getAll();
        res.status(200).json({message: "success", result: result});
    } catch(e){
      next(e);
      // res.status(500).json(e);
    }
  }

  async changeById(req : Request, res: Response, next: NextFunction){
    try {
      const userJwt = req.user as IUser;
      const id = Number(req.params["id"]);
      if (Number.isInteger(id)) {
        if (Number(userJwt.userId) === id) {
          const result = await user.changeById(id, req.body);
          res.status(200).json({message: "success", result: result});
        } else {
          res.status(200).json({message: "Error, user can change own data"});
        }
              
      } else {
        res.status(200).json({message: "Error, id is not integer"});
      }
    } catch (e) {
      next(e);
    }
  }  
}

export default new Controller();
