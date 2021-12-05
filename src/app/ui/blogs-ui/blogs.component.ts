import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';



@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.css']
})
export class BlogsComponent implements OnInit {

  topic='';
  searchStr=''


  editIds: number[] =[];

  @Input()  //декоратор @Input тот кто подключит этот компонент должен будет передать значения
  blogList: any //первоначальный массив в котором храняться блоги
  @Input()
  admin: any



  @Output()//2-е создали @Output   !!
  disabledLike = new EventEmitter<number>()  //3-е создали disabledLike (указиваем тип в <type>) |==> в wudget.html

  @Output()
  clickDisLike = new EventEmitter<number>()

  @Output()
  deleteBlog = new EventEmitter<number>()

  @Output()
  editBlockTopic = new EventEmitter<{ topic:string,id:number}>()

  @Output()
  editBlockText = new EventEmitter<{ text:string,id:number }>()

  @Output()
  editBlockTags = new EventEmitter<{ tags:string,id:number }>()

  constructor() { }

  ngOnInit(): void {
  }

  onDeleteBlog=(id:number)=>{
    this.deleteBlog.emit(id)
  }

  onClickLike=(id:number)=>{
  this.disabledLike.emit(id)
  }
  onClickDisLike=(id:number)=>{
    this.clickDisLike.emit(id)
  }

  onEdit(id:number){  // отправка отредактированного блока
    this.editIds =this.editIds.filter(item=>item!==id)

  }  onEditTopic(topic:string,id:number){  // отправка отредактированного темы
    this.editBlockTopic.emit({topic,id})

  }
  onEditText(text:string,id:number){  // отправка отредактированного текста
    this.editBlockText.emit({text,id})

  }
  onEditTags(tags:string,id:number){  // отправка отредактированных тегов
    this.editBlockTags.emit({tags,id})

  }


  onClose(id:number){                                   // фильтрация блоков находящихся в режиме редактирования
    this.editIds =this.editIds.filter(item=>item!==id)
  }
  onEditMode=(id:number)=>{
    this.editIds.push(id)   // добавлени блоков находящихся в режиме редактирования
  }



}
