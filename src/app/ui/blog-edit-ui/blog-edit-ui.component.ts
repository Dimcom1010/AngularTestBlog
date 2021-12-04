import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';


@Component({
  selector: 'app-blog-edit-ui',
  templateUrl: './blog-edit-ui.component.html',
  styleUrls: ['./blog-edit-ui.component.css']
})
export class BlogEditUiComponent implements OnInit {

  name= '';
  topic=''
  textBlog=''
  tags=''

  @Input()  //декоратор @Input тот кто подключит этот компонент должен будет передать значения
  blog: any; //первоначальный массив в котором хранятся блоги

  @Output()// *2- с помощью Output edit будет видна наверху
  edit = new EventEmitter<string>()
  @Output()// *2- с помощью Output edit будет видна наверху
  onClose =  new EventEmitter<void>()



  constructor() { }

  ngOnInit(): void {
    this.topic = this.blog.topic;
  }

  onEdit(){ // *1- считали изменённое имя и поместили в name
    if (this.topic) {
      this.edit.emit(this.topic)// *3- погружаем name в edit через emit|=>blogs.html эта комп там рисуется
    }
  }

  onCancel(){
    this.name=this.blog.name;
    this.onClose.emit()
  }
}
