import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'prettyjson'
})
export class PrettyJsonPipe implements PipeTransform {
  // eslint-disable-next-line
  transform(value: any, ...args: any[]): any {
    return JSON.stringify(value, null, 2)
      .replace(/ /g, '&nbsp;')
      .replace(/\n/g, '<br/>');
  }

}
