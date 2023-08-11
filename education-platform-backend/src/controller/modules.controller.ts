import { NextFunction, Request, Response } from "express";
import modulesService from "../service/modules.service";

class Controller {

  async getModules(req : Request, res: Response, next: NextFunction){
    try {
      
      const courseId = Number(req.params["courseId"]);
      console.log(courseId);
      if (Number.isInteger(courseId)) {
        const modules = await modulesService.getModules(courseId);
        res.status(200).json({message: "success", result: modules});
      } else{
          res.status(200).json({message: "Error, id is not integer"});
      }

    } catch (e) {
      next(e);
    }
  }      

}

export default new Controller();
