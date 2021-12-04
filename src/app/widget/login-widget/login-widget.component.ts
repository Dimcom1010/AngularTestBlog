import {Component,  OnInit } from '@angular/core';
import {
  createUserActions,
} from "../../store/myblog.actions";
import {select, Store} from "@ngrx/store";
import {MyblogState} from "../../store/myblog.reducer";
import {MyBlogService} from "../../service/my-blog.service";
import {myblogListSelector} from "../../store/myblog.selectors";
import {Observable} from "rxjs";
import {Myblog} from "../../types/myblog";

@Component({
  selector: 'app-login-widget',
  templateUrl: './login-widget.component.html',
  styleUrls: ['./login-widget.component.css']
})



export class LoginWidgetComponent implements OnInit {

  loadList$: Observable<Myblog[]> = this.store$.pipe(select(myblogListSelector))


  constructor(private store$: Store<MyblogState>,
              private loadSelector: MyBlogService,) { }

  ngOnInit(): void {
    this.loadSelector.init();
  }


}
