import { ArgumentMetadata, Injectable, PipeTransform } from '@nestjs/common';

@Injectable()
export class ValidationPiper implements PipeTransform {
  transform(value: any, metadata: ArgumentMetadata) {
    return value;
  }
}
