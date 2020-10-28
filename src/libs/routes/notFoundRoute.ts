import { Request, Response, NextFunction } from 'express'

export const notFoundRoute = (req: Request, res: Response, next: NextFunction) =>{
    next({
        error: "Not Found",
        code: 500
    })
}