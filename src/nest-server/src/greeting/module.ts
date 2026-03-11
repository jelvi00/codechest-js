import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { GreetingService } from "./service/greeting.service";
import { GreetingController } from "./controller/greeting.controller";
import { LoggerMiddleware } from "../middleware";

// @Global() Makes module exports available to all modules
@Module({
    controllers: [ GreetingController ],
    providers: [ GreetingService ],
    exports: [ GreetingService ]
})
export class GreetingModule implements NestModule {
    //See below when DynamicModule is required
    //static forRoot(entities = [], options?): DynamicModule {}

    configure(consumer: MiddlewareConsumer) {
        consumer
            .apply(LoggerMiddleware)
            .exclude("*splat/hello")
            .forRoutes(GreetingController)

    }
}
