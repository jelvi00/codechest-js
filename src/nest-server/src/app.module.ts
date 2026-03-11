import { Module } from '@nestjs/common';
import { GreetingModule } from "./greeting/module";

@Module({
    imports: [ GreetingModule ],
    //providers: [ { provide: APP_GUARD, useClass: RolesGuard } ],
})
/**
 * When using Globals, to get dependencies on Guards, Filters, Pipes, Interceptors, or SubTyped,
 * should add as provider above.
 * */
export class AppModule {
}
