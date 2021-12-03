import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'lilePosution'
})
export class LilePosutionPipe implements PipeTransform {

  transform(like_position:number[],id:number){

    if (like_position.includes(id)) {

      return true;

    }else {

      return false;
    }
  }

}
