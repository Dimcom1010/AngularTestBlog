import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {MyBlogService} from "../../service/my-blog.service";
import {NgForm} from "@angular/forms";
import {MyblogCreateActions} from "../../store/myblog.actions";
import {Store} from "@ngrx/store";
import {MyblogState} from "../../store/myblog.reducer";
import {Router} from "@angular/router";

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
  create = new EventEmitter<{ topic:string, text:string, tegs:string[]}>(); // событие по созданию нового блока


  constructor(private store$: Store<MyblogState>,
              private router:Router) { }

  @Input()  //декоратор @Input тот кто подключит этот компонент должен будет передать значения
  blogList: any //первоначальный массив в котором храняться блоги

  ngOnInit(): void {
  }
  onCreateNewBlog(blogForm: NgForm){
    console.log('textq'+blogForm.value.text)
    console.log('topicq'+blogForm.value.topic)
    if (blogForm.value){
      console.log('text'+blogForm.value.text)
      console.log('topic'+blogForm.value.topic)

      let tegsData:string[] | undefined =[]
      let tegs=blogForm.value.tegs
       tegs = tegs.replace(/\s+/g, " ");
       let tegFofmat = tegs.split(" ")
        tegsData.push(tegFofmat)
        console.log('text'+blogForm.value.text)
        console.log('topic'+blogForm.value.topic)
        console.log('tegs'+tegsData)
        console.log(tegsData)
      this.store$.dispatch(new MyblogCreateActions({text:blogForm.value.text,topic:blogForm.value.topic, tegs:tegsData} ));
        this.formInit.tegform=''
        this.formInit.topic=''
        this.formInit.text=''
        this.router.navigateByUrl('/blogs')
        }
  }
}
