import { Pipe, PipeTransform } from '@angular/core';
import {Myblog} from "../model/myblog";

@Pipe({
  name: 'searchPipe'
})
export class SearchPipePipe implements PipeTransform {


  transform(users:Myblog[],value:string) {


    return users.filter(user => {return user.topic.toLowerCase().includes(value.toLowerCase())})
  }

}
