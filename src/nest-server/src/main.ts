import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { FastifyAdapter, NestFastifyApplication } from "@nestjs/platform-fastify";
import qs from "qs";

function init() {

    NestFactory.create<NestFastifyApplication>(
        AppModule,
        new FastifyAdapter({
            querystringParser: (str) => qs.parse(str)
        })
    ).then(app => {
        //Global middlewares can be applied with app.use()
        //Global pipes can be applied with app.useGlobalPipes()
        //Global filters can be applied with app.useGlobalFilters(). Can instantiate extended from BaseExceptionFilter
        //Global guards can be applied with app.useGlobalGuards()
        //Global interceptors can be applied with app.useGlobalInterceptors()
        return app.listen(process.env.PORT ?? 3000);
    });

}

init();
