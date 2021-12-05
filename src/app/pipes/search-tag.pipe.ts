import { Pipe, PipeTransform } from '@angular/core';
import {Myblog} from "../types/myblog";

@Pipe({
  name: 'searchTag'
})
export class SearchTagPipe implements PipeTransform {

  transform(users:Myblog[],value:string){
    return users.filter(user => {return user.tegs.join(" ").toLowerCase().includes(value.toLowerCase())})
  }

}
