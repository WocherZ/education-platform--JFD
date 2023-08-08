import { NextFunction, Request, Response } from "express";
import modules from "../service/modules.service";

class Controller {

  async getModules(req : Request, res: Response, next: NextFunction){
    try {
      const id = Number(req.params["id"]);
      if (Number.isInteger(id)) {
        const result = await modules.getModules(id);
        res.status(200).json({message: "success", result: result});
      } else {
        res.status(200).json({message: "Error, id is not integer"});
      }
    } catch (e) {
      next(e);
    }
  }      

}

export default new Controller();
