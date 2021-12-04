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

  @Output()//*6  создаём Output editBlock
  editBlock = new EventEmitter<{ id:number ,name:string }>()

  constructor() { }

  ngOnInit(): void {
  }

  onDeleteBlog=(id:number)=>{
    this.deleteBlog.emit(id)
  }

  onClickLike=(id:number)=>{  //1-е создали функцию
  this.disabledLike.emit(id) //13-е  disabledLike .emit передаём значение
  }
  onClickDisLike=(id:number)=>{  //1-е создали функцию
    this.clickDisLike.emit(id) //13-е  disabledLike .emit передаём значение
  }

  onEdit(name:string,id:number){ //*5 создаём onEdit
    this.editBlock.emit({id,name}) //*7- передаём значения в editBlock |=>blogs-widget
    this.editIds =this.editIds.filter(item=>item!==id)
  }

  onClose(id:number){
    this.editIds =this.editIds.filter(item=>item!==id)
  }
  onEditMode=(id:number)=>{
    this.editIds.push(id)
  }



}
