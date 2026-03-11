import {
  Body,
  Controller,
  DefaultValuePipe,
  Get,
  HttpStatus,
  Param,
  ParseBoolPipe,
  Post,
  Query,
  Res, UseFilters, UseGuards, UseInterceptors
} from '@nestjs/common';
import { GreetingService } from "../service/greeting.service";
import type { FastifyReply } from 'fastify';
import { CustomPipe } from "../../pipe/custom-pipe.service";
import { HttpExceptionFilter } from "../../exception";
import { RoleGuard } from "../../guards";
import { Roles } from "../../decorators";
import { LoggingInterceptor, TransformInterceptor } from "../../interceptors";

@Controller({
  path: '/greetings',
  //host: "localhost", // not recommended with fastify
})
//@UseFilters can be applied here for controller-level filter
@UseGuards(RoleGuard)
@UseInterceptors(LoggingInterceptor, TransformInterceptor)
export class GreetingController {
  constructor(private readonly greetingService: GreetingService) {}

  //@UseGuards can be applied here for method-level filter
  @Get(["/:name/hello", "/hello"])
  getHello(
      @Param() params?: { name: string },
      @Query(
          'smile',
          new ParseBoolPipe({ errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE, optional: true })
      ) smile?: boolean
  ): string {
    return this.greetingService.getHello(params?.name, smile);
  }

  @Post()
  @UseFilters(HttpExceptionFilter) //When extending BaseExceptionFilter do no instantiate here.
  @Roles(['greeter'])
  addGreeting(
      @Body(
          new DefaultValuePipe({ name: "Hello", type: "World"}),
          CustomPipe
      ) greetingRequest: { name: string, type: string },
      @Query('smile') smile: string,
      @Res() reply: FastifyReply //Does not work with 'transform like' interceptor
  ) {
    reply
        .status(HttpStatus.CREATED)
        .send(this.greetingService.addGreeting(greetingRequest, smile === 'true'));
  }
}
