import { Component, OnInit } from '@angular/core';
import {select, Store} from "@ngrx/store";
import {MyblogState} from "../../store/myblog.reducer";
import {Observable} from "rxjs";
import {Myblog} from "../../model/myblog";
import {myblogListSelector, userIdAutorithedSelector} from "../../store/myblog.selectors";
import {
  MyblogCreateComment,
  MyblogDisabledLikeActions,
  MyblogDisLikeActions
} from "../../store/myblog.actions";

@Component({
  selector: 'app-blog-readable-widget',
  templateUrl: './blog-readable-widget.component.html',
  styleUrls: ['./blog-readable-widget.component.css']
})

export class BlogReadableWidgetComponent implements OnInit {

  userId$: Observable<number> = this.store$.pipe(select(userIdAutorithedSelector))
  blogList$: Observable<Myblog[]> = this.store$.pipe(select(myblogListSelector))


  constructor(private store$: Store<MyblogState>,
              ) { }

  ngOnInit(): void {}



  // @ts-ignore
  onCreateComment({comment,id}){
    this.store$.dispatch(new MyblogCreateComment({comment,id} ));
  }

  onClickLike(id: { id: number }){
    this.store$.dispatch(new MyblogDisabledLikeActions({id}))
  }

  onClickDisLike(id: { id: number }){
    this.store$.dispatch(new MyblogDisLikeActions({id}))
  }

}
