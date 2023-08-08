import { NextFunction, Request, Response } from "express";
import modules from "../service/modules.service";

class Controller {

  async getByName(req : Request, res: Response, next: NextFunction){
    try {  
      const { name } = req.query;
      const result = await modules.getByName(name?.toString() || "");
      res.status(200).json({message: "success", result: result});
    } catch (e) {
      next(e);
    }
   }   

}

export default new Controller();
