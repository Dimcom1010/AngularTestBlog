import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';


@Component({
  selector: 'app-blog-edit-ui',
  templateUrl: './blog-edit-ui.component.html',
  styleUrls: ['./blog-edit-ui.component.css']
})
export class BlogEditUiComponent implements OnInit {

  name= '';

  @Input()  //декоратор @Input тот кто подключит этот компонент должен будет передать значения
  blog: any; //первоначальный массив в котором хранятся блоги

  @Output()// *2- с помощью Output edit будет видна наверху
  edit = new EventEmitter<string>()

  constructor() { }

  ngOnInit(): void {
    this.name = this.blog.name;

  }

  onEdit(){ // *1- считали изменённое имя и поместили в name
    if (this.name) {
      this.edit.emit(this.name)// *3- погружаем name в edit через emit|=>blogs.html эта комп там рисуется
    }
  }
  onCancel(){
    this.name=this.blog.name;
  }
}
