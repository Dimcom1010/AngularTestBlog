import { Component, OnInit } from '@angular/core';
import {select, Store} from "@ngrx/store";
import {MyblogState} from "../../store/myblog.reducer";
import {loadSelector} from "../../store/myblog.selectors";
import {LogOutActions} from "../../store/myblog.actions";

@Component({
  selector: 'app-menu-widget',
  templateUrl: './menu-widget.component.html',
  styleUrls: ['./menu-widget.component.css']
})
export class MenuWidgetComponent implements OnInit {

  loadSelector$:any= this.store$.pipe(select(loadSelector))

  constructor(private store$: Store<MyblogState>) { }

  ngOnInit(): void {
  }
  logOut(){
    this.store$.dispatch(new LogOutActions({}))
  }

}
