import { Request, Response, NextFunction } from 'express';

export const errorHandler = (err, req: Request, res: Response, next: NextFunction ) =>{
    res.json({
        error: err.error,
        status: err.code,
        message: err.message || "Error",
        timestamp: new Date()
        
    })
}