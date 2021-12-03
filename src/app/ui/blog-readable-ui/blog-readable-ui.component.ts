import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Myblog} from "../../model/myblog";
import {BlogsService} from "../../service/blogs.service";
import {MyblogState} from "../../store/myblog.reducer";
import {MyblogDisabledLikeActions, MyblogDisLikeActions} from "../../store/myblog.actions";
import { Store} from "@ngrx/store";
import {NgForm} from "@angular/forms";

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
  comment1:string=""
  @Input()
  userId: any

  constructor(  private route:ActivatedRoute,
                private  blogsService:BlogsService,
                private store$: Store<MyblogState>,
                ) { }
  @Output()
  createComment = new EventEmitter<{comment:string,id:number}>();

  ngOnInit(): void {
    this.idCom= +this.route.snapshot.params['id']; // роутин забираем id пользователя из URL
    this.blogInfo=this.blogsService.getIdBlog(this.idCom)
  }

  onClickLike(id:number){

    this.store$.dispatch(new MyblogDisabledLikeActions({id}))
  }

  onClickDisLike(id:number){
    this.store$.dispatch(new MyblogDisLikeActions({id}))
  }

  onComment(commentForm:NgForm,idblog:number){
    if (commentForm.value) {
      console.log(commentForm.value.comment)
      console.log(idblog)
      this.createComment.emit({comment:commentForm.value.comment,id:idblog})


    }else{
    }
  }
}
