import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatCode'
})
export class FormatCodePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    // TODO: Format Code
    return value;
  }

}
