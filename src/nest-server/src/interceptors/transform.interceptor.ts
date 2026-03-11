import { CallHandler, ExecutionContext, Injectable, NestInterceptor } from "@nestjs/common";
import { Observable, map } from "rxjs";

export interface Response<T> {
    data: T;
}

@Injectable()
export class TransformInterceptor implements NestInterceptor<string, Response<string>> {

    intercept(context: ExecutionContext, next: CallHandler): Observable<Response<string>> {

        return next
            .handle()
            .pipe(
                //The data prop is returned from the function call.
                //Does not work @Res implementation, just hangs request
                map((data) => ({ data }))
            );
    }


}
