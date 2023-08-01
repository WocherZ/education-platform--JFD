import { Request, Response, NextFunction } from "express";
import logger from "../utils/logger";

// class CustomError {
//   message!: string;
//   status!: number;
//   constructor(message: string, status = 500) {
//     this.message = message;
//     this.status = status;
//   }
// }


// export const ErrorMiddleware = async ( 
//   err: TypeError | CustomError,
//   req: Request,
//   res: Response,
//   next: NextFunction) => {
//     console.log("Middleware Error Hadnling");
//     let customError = err;
//     if (!(err instanceof CustomError)) {
//       customError = new CustomError(
//         'Something went wrong'
//       );
//     }
//     // logger.error(`Ошибка сервера: ${err}`);
//     res.status((customError as CustomError).status).json({message: customError});
//   };
export const ErrorMiddleware = async ( 
  err: string,
  req: Request,
  res: Response,
  _next: NextFunction) => {
    logger.error(`Ошибка сервера: ${err}`);
    res.status(500).json({message: "Ошибка сервера"});
  };