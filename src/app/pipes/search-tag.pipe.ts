import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchTag'
})
export class SearchTagPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
