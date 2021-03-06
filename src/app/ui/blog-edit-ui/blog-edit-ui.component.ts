import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';


@Component({
  selector: 'app-blog-edit-ui',
  templateUrl: './blog-edit-ui.component.html',
  styleUrls: ['./blog-edit-ui.component.css']
})
export class BlogEditUiComponent implements OnInit {


  topic=''
  textBlog=''
  tags=''

  @Input()
  blog: any;
  @Output()
  edit = new EventEmitter<void>()
  @Output()
  editTopic = new EventEmitter<string>()
  @Output()
  editText = new EventEmitter<string>()
  @Output()
  editTags = new EventEmitter<string>()
  @Output()
  onClose =  new EventEmitter<void>()



  constructor() { }

  ngOnInit(): void {          // событие жизненного цикла после монтирования компонента
    this.topic = this.blog.topic;
    this.textBlog = this.blog.text;
    this.tags = this.blog.tegs;

  }

  onEdit(){                 // событие во время нажатия кнопки сохранить
    if (this.topic && this.textBlog && this.tags) {
      this.edit.emit()
      this.editTopic.emit(this.topic)
      this.editText.emit(this.textBlog)
      this.editTags.emit(this.tags)

    }
  }

  onCancel(){             // событие во время нажатия кнопки отмена
    this.topic = this.blog.topic;
    this.textBlog = this.blog.text;
    this.tags = this.blog.tegs;
    this.onClose.emit()
  }
  onReturnTopic(){
    this.topic = this.blog.topic;
  }
  onReturnText(){
    this.textBlog = this.blog.text;
  }
  onReturnTags(){
    this.tags = this.blog.tegs;
  }

}
