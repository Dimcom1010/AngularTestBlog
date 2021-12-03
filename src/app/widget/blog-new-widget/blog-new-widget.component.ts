import { Component, OnInit } from '@angular/core';
import {MyblogCreateActions} from "../../store/myblog.actions";
import {Store} from "@ngrx/store";
import {MyblogState} from "../../store/myblog.reducer";

@Component({
  selector: 'app-blog-new-widget',
  templateUrl: './blog-new-widget.component.html',
  styleUrls: ['./blog-new-widget.component.css']
})
export class BlogNewWidgetComponent implements OnInit {

  constructor(private store$: Store<MyblogState>,) { }

  ngOnInit(): void {
  }
  // @ts-ignore
  onCreateNewBlog({name, topic, text, tegs}){
    this.store$.dispatch(new MyblogCreateActions({name,topic,text, tegs} ));
  }


}
