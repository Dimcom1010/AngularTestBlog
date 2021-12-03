import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';


@Component({
  selector: 'app-blog-display-ui',
  templateUrl: './blog-display-ui.component.html',
  styleUrls: ['./blog-display-ui.component.css']
})
export class BlogDisplayUiComponent implements OnInit {

  @Input()
  blog:any;
  @Input()
  admin:any;


  @Output()//2-е создали @Output   !!
  disabledLike = new EventEmitter<void>()  //3-е создали disabledLike (указиваем тип в <type>) |==> в wudget.html


  @Output()
  clickDisLike = new EventEmitter<void>()


  @Output()
  deleteBlog = new EventEmitter<void>() // void -это ничего не передаём

  @Output()
  onEditMode = new EventEmitter<void>()

  constructor() { }

  ngOnInit(): void {
  }


  onClickLike=()=>{  //1-е создали функцию
    this.disabledLike.emit() //13-е  disabledLike .emit передаём значение

  }
  onClickDisLike=()=>{  //1-е создали функцию
    this.clickDisLike.emit()

  }
  onDeleteBlog=()=>{
    this.deleteBlog.emit()
  }
  onEditBlog=()=>{
    this.onEditMode.emit()
  }

}
