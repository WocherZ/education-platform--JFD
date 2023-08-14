import { NextFunction, Request, Response } from "express";
import course from "../service/course.service";
import { IUser } from "../middlewares/user.middleware";

class Controller {
  async getById(req : Request, res: Response, next: NextFunction){
    try {
      const id = Number(req.params["id"]);
      if (Number.isInteger(id)) {
        const result = await course.getById(id);
        res.status(200).json({message: "success", result: result});
      } else {
        res.status(200).json({message: "Error, id is not integer", result: null});
      }
    } catch (e) {
      next(e);
    }
  }   

  async getByName(req : Request, res: Response, next: NextFunction){
    try {  
      const { name } = req.query;
      const result = await course.getByName(name?.toString() || "");
      res.status(200).json({message: "success", result: result});
    } catch (e) {
      next(e);
    }
   }   

  async getAll(req : Request, res: Response, next: NextFunction){
    try {
        const result = await course.getAll();
        res.status(200).json({message: "success", result: result});
    } catch(e){
      next(e);
    }
  }
  

  async post(req : Request, res: Response, next: NextFunction) {
    try {
      const user = req.user as IUser;
      const { name, description } = req.body;
      const result = await course.create(name, user.userId, description);      
      if (result) {
        res.status(200).json(result);
      } else {
        res.status(400).json("not posted");  
      }
    } catch(e){
      next(e);
    }
  }

  async join(req : Request, res: Response, next: NextFunction) {
    try {
      // const user = req.user as IUser;
      const { courseId, userId, role } = req.body;
      // console.log("params]", req.params);
      console.log("body", req.body);
      const result = await course.join(courseId, userId, role );      
      if (result) {
        res.status(200).json(result);
      } else {
        res.status(400).json("not posted");  
      }
    } catch(e){
      next(e);
    }
  }

  async changeById(req : Request, res: Response, next: NextFunction){
    try {
      const id = Number(req.params["id"]);
      if (Number.isInteger(id)) {
          const result = await course.changeById(id, req.body);
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
