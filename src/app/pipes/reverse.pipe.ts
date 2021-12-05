import { Pipe, PipeTransform } from '@angular/core';
import {Myblog} from "../types/myblog";

@Pipe({
  name: 'reverse'
})

  export class ReversePipe implements PipeTransform {

  transform(users:Myblog[]){
    return users.reverse()
  }

}
