import { NextFunction, Response, Request } from "express"
 
// export  const validationHandler = (config: any) => (res: Response, req: Request, next: NextFunction) =>{
//     console.log("config", validationHandler);
//     next();
// }
export default function(config){
    return function(req , res, next,){
        console.log(config);
        next();
    }
}