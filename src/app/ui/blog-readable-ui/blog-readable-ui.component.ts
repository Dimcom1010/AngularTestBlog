import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Myblog} from "../../types/myblog";
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
  @Input()
  blogList: any

  constructor(  private route:ActivatedRoute,
                private  blogsService:BlogsService,

                ) { }
  @Output()
  createComment = new EventEmitter<{comment:string,id:number}>();
  @Output()
  clickLike = new EventEmitter<{id:number}>();
  @Output()
  clickDisLike = new EventEmitter<{id:number}>();

  ngOnInit(): void {
    this.idCom= +this.route.snapshot.params['id']; // роутин забираем id пользователя из URL
    this.blogInfo=this.blogsService.getIdBlog(this.idCom)
  }
  ngOnChanges(): void {
    this.blogInfo=this.blogsService.getIdBlog(this.idCom)

  }


  onClickLike(id:number){
    this.clickLike.emit({id})
  }

  onClickDisLike(id:number){
    this.clickDisLike.emit({id})
  }

  onComment(commentForm:NgForm,idblog:number){
    if (commentForm.value) {
      this.createComment.emit({comment:commentForm.value.comment,id:idblog})
      this.comment1=""
    }else{
    }
  }
}
