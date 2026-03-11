import { ArgumentMetadata, Injectable, PipeTransform } from "@nestjs/common";

@Injectable()
export class CustomPipe implements PipeTransform {

    transform(value: unknown, metadata: ArgumentMetadata) {

        console.log('Transforming...');
        return value;
    }

}
