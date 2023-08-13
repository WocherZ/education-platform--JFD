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
  
  async post(req : Request, res: Response, next: NextFunction) {
    try {
      const courseId = Number(req.params["id"]);
      console.log("courseId", courseId);
      
      const { name } = req.body;
      console.log("name", name);
      const result = await modulesService.create(courseId, name);
      if (result) {
        res.status(200).json(result);
      } else {
        res.status(400).json("not posted");  
      }
    } catch(e){
      next(e);
    }
  }

}

export default new Controller();
