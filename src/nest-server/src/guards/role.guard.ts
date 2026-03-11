import { CanActivate, ExecutionContext, Injectable } from "@nestjs/common";
import { Observable } from "rxjs";
import { Reflector } from "@nestjs/core";
import { Roles } from "../decorators";

@Injectable()
export class RoleGuard implements CanActivate {

    constructor(private reflector: Reflector) {}

    canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean> {

        const roles = this.reflector.get(Roles, context.getHandler());

        const authorizationH = context
            .switchToHttp()
            .getRequest().headers['authorization'];

        if (!authorizationH) return false;

        let authorized = false;

        if (authorizationH.includes('Bearer')) {

            const token = authorizationH
                ?.replace('Bearer', '')
                ?.trim()
                ?.toUpperCase();

            if (roles.includes(TokenToRole[token])) authorized = true;
        }

        return authorized;
    }

}

enum TokenToRole {
    ADMIN = 'admin',
    GREETER = 'greeter'
}
