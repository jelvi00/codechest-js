import { ArgumentsHost, Catch, ExceptionFilter, HttpException } from "@nestjs/common";
import type { FastifyReply, FastifyRequest } from "fastify";

//@Catch() without arguments will catch all exceptions
@Catch(HttpException)
export class HttpExceptionFilter implements ExceptionFilter {
//Can extend from BaseExceptionFilter to inhering catch() implementation

    catch(exception: HttpException, jost: ArgumentsHost) {

        const ctx = jost.switchToHttp();
        const reply = ctx.getResponse<FastifyReply>();
        const request = ctx.getRequest<FastifyRequest>();
        const status = exception.getStatus();

        reply
            .status(status)
            .send({
                statusCode: status,
                path: request.url,
                timestamp: new Date().toISOString(),
            })

    }

}
