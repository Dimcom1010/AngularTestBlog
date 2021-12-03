import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'numberInArray'
})
export class NumberInArrayPipe implements PipeTransform {

  transform(array:number[]){

    return array.length;
  }


}
