import {Component, Input, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {Myblog} from "../../model/myblog";
import {select, Store} from "@ngrx/store";
import {myblogListSelector} from "../../store/myblog.selectors";
import {MyblogState} from "../../store/myblog.reducer";
import {MyBlogService} from "../../service/my-blog.service";

@Component({
  selector: 'app-charts-widget',
  templateUrl: './charts-widget.component.html',
  styleUrls: ['./charts-widget.component.css']
})
export class ChartsWidgetComponent implements OnInit {

  blogList$: Observable<Myblog[]> = this.store$.pipe(select(myblogListSelector)) ;// из хронилища возвращается обрёрвибал


  constructor(private store$: Store<MyblogState>,
              private myBlogSyncStorage: MyBlogService,) { }

  ngOnInit(): void {
    this.myBlogSyncStorage.init();

  }


}
