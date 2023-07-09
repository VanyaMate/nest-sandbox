import {MiddlewareConsumer, Module, NestModule, RequestMethod} from "@nestjs/common";
import {UsersController} from "./users.controller";
import {UsersService} from "./users.service";
import {LoggerMiddleware} from "../../../middlewares/logger.middleware";
import * as cors from 'cors';

@Module({
    controllers: [UsersController],
    providers: [UsersService],
})
export class UsersModule implements NestModule {
    configure(consumer: MiddlewareConsumer): void {
        const corsCb = (req, cb) => {
            console.log('cors middleware');
            cb(null, {origin: true})
        };
        consumer
            .apply(LoggerMiddleware, cors(corsCb)).forRoutes({ path: '*update', method: RequestMethod.GET })
            .apply(LoggerMiddleware).forRoutes(UsersController);
    }
}