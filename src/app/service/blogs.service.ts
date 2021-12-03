import {Injectable} from "@angular/core";
import {select, Store} from "@ngrx/store";
import {MyblogState} from "../store/myblog.reducer";
import {filter} from "rxjs";
import {blogListFeatureSelector} from "../store/myblog.selectors";
import {Myblog} from "../model/myblog";


@Injectable({
  providedIn: 'root'
})
export class BlogsService {

  blogInfo:Myblog={
    id: 0,
    name: "Пустой",
    topic: "Пустой",
    text: "Пустой",
    tegs:["Пустой","Пустой", "Пустой","Пустой"],
    like_position: [],
    dataCreature: new Date(2021,1,1,12,32,54).toDateString(),
    comments:[],


  }
  key:number=0
  com: {} =[]
  constructor(private store$: Store<MyblogState>) { }
  getIdBlog(id:number){
    this.store$.pipe(
      select(blogListFeatureSelector),
      filter(state=>!!state)
    ).subscribe(state=>{
      state.blogList.forEach(x=>{
        if (x.id===id){
          this.com=this.copyArray(x.comments)

          this.blogInfo={
            id:x.id,
            name:x.name,
            topic:x.topic,
            text:x.text,
            tegs:x.tegs,
            like_position:x.like_position,
            dataCreature:x.dataCreature,
            comments:this.com
          }

        }


      })

    });
    return this.blogInfo
    }

    copyArray(oldArray :any) {
      var newArray = oldArray.slice();
    return newArray;
  }

}
