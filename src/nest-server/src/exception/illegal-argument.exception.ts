import { HttpException, HttpStatus } from "@nestjs/common";


export class IllegalArgumentException extends HttpException {

    constructor() {
        super("Illegal Argument", HttpStatus.BAD_REQUEST);
    }

}
