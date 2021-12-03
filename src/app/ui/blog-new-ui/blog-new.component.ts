import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {MyBlogService} from "../../service/my-blog.service";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-blog-new',
  templateUrl: './blog-new.component.html',
  styleUrls: ['./blog-new.component.css'],
  providers: [MyBlogService]
})
export class BlogNewComponent implements OnInit {
      formInit = {
      name : '',
      topic : '',
      tegform:'',
      text : '',
    }

  @Output()//декорирует некоторое свойство класс
  create = new EventEmitter<{ name:string, topic:string, text:string, tegs:string[]}>(); // событие по созданию нового блока


  constructor(private dataService: MyBlogService) { }

  @Input()  //декоратор @Input тот кто подключит этот компонент должен будет передать значения
  blogList: any //первоначальный массив в котором храняться блоги




  ngOnInit(): void {

  }
  onCreateNewBlog(blogForm: NgForm){

    if (blogForm.value){
      let tegsData:string[] | undefined =[]

      let tegs=blogForm.value.tegs
       tegs = tegs.replace(/\s+/g, " ");


       let tegFofmat = tegs.split(" ")

        tegsData.push(tegFofmat)


      this.create.emit({name:blogForm.value.name, text: blogForm.value.topic, topic:blogForm.value.text, tegs:tegsData})
        this.formInit.name=''
        this.formInit.topic=''
        this.formInit.text=''
        this.formInit.tegform=''

        }
  }

}
