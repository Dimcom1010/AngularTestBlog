import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Myblog} from "../../model/myblog";
import {BlogsService} from "../../service/blogs.service";
import {MyblogState} from "../../store/myblog.reducer";
import {MyblogDisabledLikeActions, MyblogDisLikeActions} from "../../store/myblog.actions";
import {select, Store} from "@ngrx/store";
import {MyBlogService} from "../../service/my-blog.service";
import {Observable} from "rxjs";
import {myblogListSelector, userIdAutorithedSelector} from "../../store/myblog.selectors";

@Component({
  selector: 'app-blog-readable-ui',
  templateUrl: './blog-readable-ui.component.html',
  styleUrls: ['./blog-readable-ui.component.css']
})
export class BlogReadableUiComponent implements OnInit {

  blogInfo:Myblog={
    id: 0,
    name: "Пустой",
    topic: "Пустой",
    text: "Пустой",
    tegs:["Пустой","Пустой", "Пустой","Пустой"],
    like_position: [],
    dataCreature: new Date().toDateString(),
  }
  idCom:number|undefined

  @Input()
  userId: any

  constructor(  private route:ActivatedRoute,
                private  blogsService:BlogsService,
                private store$: Store<MyblogState>,
                ) { }

  ngOnInit(): void {
    this.idCom= +this.route.snapshot.params['id']; // роутин забираем id пользователя из URL
    this.blogInfo=this.blogsService.getIdBlog(this.idCom)

  }
  onClickLike(id:number){ //6-е соддаём onDisabledLike передаём id
    //7-е вызываем dispatch что бы отметить что лайк поставлен |==> myblog.action.ts
    this.store$.dispatch(new MyblogDisabledLikeActions({id}))             //13-добавляем диспатч |==> ui.ts
  }

  onClickDisLike(id:number){
    this.store$.dispatch(new MyblogDisLikeActions({id}))
  }
}
