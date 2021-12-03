import { Component, OnInit } from '@angular/core';
import {createUserActions} from "../../store/myblog.actions";
import {Store} from "@ngrx/store";
import {MyblogState} from "../../store/myblog.reducer";

@Component({
  selector: 'app-registration-widget',
  templateUrl: './registration-widget.component.html',
  styleUrls: ['./registration-widget.component.css']
})
export class RegistrationWidgetComponent implements OnInit {

  constructor(private store$: Store<MyblogState>,) { }

  ngOnInit(): void {
  }
  // @ts-ignore
  onCreateUser({name, login, password}){
    this.store$.dispatch(new createUserActions({name,login,password} ));
  }
}
