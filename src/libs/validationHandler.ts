import { NextFunction, Request, Response } from "express";

export default (config) => (req: Request, res: Response, next: NextFunction) =>{
    console.log("config", config);
    next();
}