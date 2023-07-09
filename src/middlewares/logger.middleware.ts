import {NestMiddleware} from "@nestjs/common";
import {Response, Request, NextFunction} from "express";

export class LoggerMiddleware implements NestMiddleware {
    use(req: Request, res: Response, next: NextFunction): void {
        console.log('Logger', req.ip);
        next();
        console.log('End')
    }
}