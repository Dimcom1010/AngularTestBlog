import { Component, OnInit } from '@angular/core';
import {select, Store} from "@ngrx/store";
import {myblogListSelector, UserAdmin} from "../../store/myblog.selectors";
import {MyblogState} from "../../store/myblog.reducer";
import {Observable} from "rxjs";
import {Myblog} from "../../types/myblog";
import {

  MyblogDeleteBlogActions,
  MyblogDisabledLikeActions,
  MyblogDisLikeActions,
  MyblogEditBlogTagsActions,
  MyblogEditBlogTextActions,
  MyblogEditBlogTopicActions
} from "../../store/myblog.actions";
import {MyBlogService} from "../../service/my-blog.service";

@Component({
  selector: 'app-blogs-widget',
  templateUrl: './blogs-widget.component.html',
  styleUrls: ['./blogs-widget.component.css']
})
export class BlogsWidgetComponent implements OnInit {

//Observable хронит массив blogList с типом Myblog
  isAuth:boolean=false
   // onAdd:boolean=false

  blogList$: Observable<Myblog[]> = this.store$.pipe(select(myblogListSelector)) ;// из хронилища возвращается обрёрвибал
  admin$: Observable<boolean> = this.store$.pipe(select(UserAdmin))

  constructor(private store$: Store<MyblogState>,
              private myBlogSyncStorage: MyBlogService, // подписка на обновления стора
              ) { } // подгружаем стор

  ngOnInit(): void {
    this.myBlogSyncStorage.init(); //вызов синхронизации
  }

  onDisabledLike(id:number){ //6-е соддаём onDisabledLike передаём id
                //7-е вызываем dispatch что бы отметить что лайк поставлен |==> myblog.action.ts
   this.store$.dispatch(new MyblogDisabledLikeActions({id}))             //13-добавляем диспатч |==> ui.ts
  }

  onClickDisLike(id:number){
    this.store$.dispatch(new MyblogDisLikeActions({id}))
  }
  onDeleteBlog(id:number){
    this.store$.dispatch(new MyblogDeleteBlogActions({id}))
  }



  // @ts-ignore
  onEditBlockTopic({topic,id}){
    this.store$.dispatch(new MyblogEditBlogTopicActions({topic,id}))
  }

  // @ts-ignore
  onEditBlockText({text,id}){
    this.store$.dispatch(new MyblogEditBlogTextActions({text,id}))
  }

  // @ts-ignore
  onEditBlockTags({tags,id}){
    this.store$.dispatch(new MyblogEditBlogTagsActions({tags,id}))
  }
}
